import type React from 'react';
import { type Dispatch, type SetStateAction } from 'react';
import { deleteCookie, getCookie } from './cookie';

export class SocketClient {
  private clientSocket: WebSocket | null;
  private statusSocket: WebSocket | null;
  private readonly cookie: string;
  private readonly uuid: string | undefined;
  private readonly name: string;
  private readonly client: clientResult | undefined;
  private oldestMsgDatetime: string | null;
  private appendBack: boolean;
  private isInitialized: boolean;
  private msgHeight: number;
  private readonly setRoomName: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  private readonly useOnlineStatus: boolean | undefined;

  constructor(
    cookie: string,
    client: clientResult | undefined,
    setRoomName: Dispatch<SetStateAction<string | null>>
  ) {
    this.cookie = cookie;
    this.uuid = client?.uuid;
    this.useOnlineStatus = client?.configs.useOnlineStatus;
    this.client = client;
    this.clientSocket = null;
    this.statusSocket = null;
    this.oldestMsgDatetime = null;
    this.appendBack = true;
    this.isInitialized = false;
    this.msgHeight = 0;
    this.setRoomName = setRoomName;
  }

  async connect() {
    const root =
      document.querySelector('.MsgContainerMain') ??
      document.createElement('div');

    await new Promise<void>((resolve, reject) => {
      this.clientSocket = new WebSocket(
        `wss://api.pintalk.app/ws/chat/${this.cookie}/`
      );

      // open event
      this.clientSocket.addEventListener('open', () => {
        console.log('Socket connected');
        console.log(this.name);
        resolve();
      });

      this.clientSocket.addEventListener('error', (error) => {
        reject(error);
      });

      this.clientSocket.addEventListener('close', (event) => {
        this.clientSocket = null;
        if (event.code === 4004) {
          const msg =
            '호스트에 의해 채팅이 삭제되었습니다. 새로운 대화를 시작하시려면 아래 버튼을 눌러주세요.';
          const dateTime = this.formatTimeStamp(this.getDatetime());
          const deleteMsgContainer = this.createElement(true, dateTime, msg);

          const roomCreateBtn = document.createElement('div');
          roomCreateBtn.className = 'RoomCreateBtn';
          roomCreateBtn.innerHTML = '새 채팅방 생성하기';

          const secondChild = deleteMsgContainer.childNodes[1];
          secondChild.appendChild(roomCreateBtn);
          root.appendChild(deleteMsgContainer);

          roomCreateBtn.addEventListener('click', () => {
            if (getCookie('pintalk')) {
              deleteCookie('pintalk');
              const roomName = getCookie('pintalk');
              this.setRoomName(roomName);
              const createdNewChat = document.createElement('div');
              createdNewChat.className = 'CreateNewChat';
              createdNewChat.innerHTML =
                '새로운 채팅방이 생성되었어요. 메시지를 보내 보세요!';
              root.appendChild(createdNewChat);
            }
          });
        }
        console.log(
          'client Socket disconnected',
          event.wasClean,
          event.code,
          event.reason
        );
      });

      this.clientSocket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        if (data.data) {
          // 다중 메시지
          const items = data.data;
          items.forEach((item: receivedMsg) => {
            const msgContainer = this.createMsgBox(item);
            if (this.appendBack) {
              // 초기 소켓 연결 시 메시지 수신하는 경우
              if (this.oldestMsgDatetime === null)
                this.oldestMsgDatetime = item.datetime;
              console.log(this.appendBack);
              root.appendChild(msgContainer);
              root.scrollTop = root.scrollHeight;
            } else {
              // request 로 과거 메시지 수신하는 경우
              this.oldestMsgDatetime = item.datetime;
              const base = root.firstChild;

              if (base) {
                root.insertBefore(msgContainer, base.nextSibling);
                this.msgHeight = this.msgHeight + msgContainer.offsetHeight;
                root.scrollTop = this.msgHeight;
              }
            }
          });
          this.isInitialized = true;
          this.appendBack = true;
          this.msgHeight = 0;
        } else {
          // 단일 메시지 - undefined
          const msgContainer = this.createMsgBox(data);
          console.log(this.appendBack);
          if (this.appendBack) {
            console.log(this.appendBack);
            root.appendChild(msgContainer);
            root.scrollTop = root.scrollHeight;
          }
        }
      });

      if (this.uuid !== undefined && this.useOnlineStatus === true) {
        this.statusSocket = new WebSocket(
          `wss://api.pintalk.app/ws/status/${this.uuid}/`
        );

        this.statusSocket.addEventListener('open', () => {
          console.log('status socket opened');
        });

        this.statusSocket.addEventListener('error', (error) => {
          reject(error);
        });

        this.statusSocket.addEventListener('message', (event) => {
          const data = JSON.parse(event.data);
          console.log('status socket received:', data);

          const isOnline = data.message === 'online';

          const OnOff =
            document.querySelector('.MsgContainerHeaderOnOff') ??
            document.createElement('div');

          const textNode = OnOff.childNodes[1];
          textNode.nodeValue = isOnline ? '온라인' : '오프라인';

          const color = isOnline ? '#71E07C' : '#DDDDDD';
          OnOff.querySelector('svg circle')?.setAttribute('fill', color);

          const ModalOnOff = document.querySelector('.ModalOnOff');
          ModalOnOff?.querySelector('svg circle')?.setAttribute('fill', color);
        });

        this.statusSocket.addEventListener('close', (event) => {
          this.statusSocket = null;
          console.log(
            'status Socket disconnected',
            event.wasClean,
            event.code,
            event.reason
          );
        });
      }
    });
  }

  setAppendBack(appendBack: boolean) {
    this.appendBack = appendBack;
  }

  getIsInitialized() {
    return this.isInitialized;
  }

  createMsgBox(data: receivedMsg) {
    const type = data.type;
    const isHost = data.is_host;
    const datetime = data.datetime;

    const timeStamp = this.formatTimeStamp(datetime);
    const msg =
      type === 'notice' && data.message === 'closed'
        ? '채팅이 종료되었습니다. 메시지를 전송하여 기존 대화를 다시 시작할 수 있습니다.'
        : data.message;
    const formatMsg = msg.replace(/\n/g, '<br/>');
    console.log('Socket received data:', data);

    return this.createElement(isHost, timeStamp, formatMsg);
  }

  createElement(isHost: boolean, timeStamp: string, msg: string) {
    const msgContainer = document.createElement('div');
    const msgBox = document.createElement('div');

    msgContainer.className = isHost ? 'MsgContainerLeft' : 'MsgContainerRight';

    msgBox.innerHTML = msg;
    msgBox.className = isHost ? 'ReceivedMsgBox' : 'SendMsgBox';

    const msgTimeStamp = document.createElement('div');
    msgTimeStamp.className = 'MsgTimeStamp';

    const msgTimeStampText = document.createElement('div');
    msgTimeStamp.appendChild(msgTimeStampText);
    msgTimeStampText.innerHTML = timeStamp;

    if (msgBox.className === 'ReceivedMsgBox') {
      const hostProfile = document.createElement('div');
      hostProfile.className = 'HostProfileBox';

      const ProfileImg = document.createElement('img');
      ProfileImg.src =
        this.client?.profileImage != null
          ? this.client?.profileImage
          : 'https://www.figma.com/file/FfkwfY2NPbl4eufVPM5CLD/PinTalk_UI?node-id=209-209&t=jiqk5vYLsJX8R75e-4';

      hostProfile.appendChild(ProfileImg);
      msgContainer.appendChild(hostProfile);

      msgContainer.appendChild(msgBox);
      msgContainer.appendChild(msgTimeStamp);
    } else if (msgBox.className === 'SendMsgBox') {
      msgContainer.appendChild(msgTimeStamp);
      msgContainer.appendChild(msgBox);
    }

    return msgContainer;
  }

  getDatetime() {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    return now.toISOString().substring(0, 19);
  }

  formatTimeStamp(datetime: string) {
    const date: Date = new Date(datetime);

    // 시간을 12시간제로 변환
    let hours: number = date.getHours();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const min =
      date.getMinutes().toString().length === 1
        ? '0' + date.getMinutes().toString()
        : date.getMinutes().toString();
    // 변환된 시간 문자열
    const timeString: string = `${ampm} ${hours}:${min}`;
    return timeString;
  }

  sendMessage(data: any) {
    if (
      this.clientSocket != null &&
      this.clientSocket.readyState === WebSocket.OPEN
    ) {
      const message = JSON.stringify({
        type: 'chat_message',
        is_host: false,
        message: data,
        datetime: this.getDatetime(),
      });
      console.log('Sending message:', message);
      this.clientSocket.send(message);
    } else {
      console.log('Socket is not connected');
    }
  }

  requestPastMessages() {
    if (
      this.clientSocket != null &&
      this.clientSocket.readyState === WebSocket.OPEN
    ) {
      const oldest = this.oldestMsgDatetime;
      this.oldestMsgDatetime = null;
      if (oldest !== null) {
        this.appendBack = false;
        const message = JSON.stringify({
          type: 'request',
          is_host: false,
          message: oldest,
          datetime: this.getDatetime(),
        });
        console.log('Requesting past messages:', message);
        this.clientSocket.send(message);
      }
    } else {
      console.log('Socket is not connected');
    }
  }

  disconnect() {
    if (
      (this.clientSocket !== null &&
        this.clientSocket.readyState === WebSocket.OPEN) ||
      (this.statusSocket !== null &&
        this.statusSocket.readyState === WebSocket.OPEN)
    ) {
      this.clientSocket?.close();
      this.statusSocket?.close();
    }
  }
}
