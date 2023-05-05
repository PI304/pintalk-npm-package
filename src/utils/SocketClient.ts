// import type React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReceivedMsgBox from '../components/ReceivedMsgBox';
// import SendMsgBox from '../components/SendMsgBox';

export class SocketClient {
  private clientSocket: WebSocket | null;
  private statusSocket: WebSocket | null;
  private readonly cookie: string;
  private readonly uuid: string | undefined;
  private readonly name: string;

  // private readonly components: React.ReactNode[] = [];

  constructor(cookie: string, uuid: string | undefined) {
    this.cookie = cookie;
    this.uuid = uuid;
    // this.components = [];
    this.clientSocket = null;
    this.statusSocket = null;
  }

  async connect() {
    await new Promise<void>((resolve, reject) => {
      this.clientSocket = new WebSocket(
        `wss://api.pintalk.app/ws/chat/${this.cookie}/`
      );

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
        console.log(
          'client Socket disconnected',
          event.wasClean,
          event.code,
          event.reason
        );
      });

      const root =
        document.querySelector('.MsgContainerMain') ??
        document.createElement('div');
      // const roots = ReactDOM.createRoot(root);
      // console.log(roots);

      this.clientSocket.addEventListener('message', (event) => {
        const data = JSON.parse(event.data);
        const isHost = data.is_host;
        const msg = data.message;
        console.log('Socket received data:', data);

        const msgContainer = document.createElement('div');
        const msgBox = document.createElement('div');

        msgContainer.className =
          isHost === true ? 'MsgContainerLeft' : 'MsgContainerRight';

        msgBox.innerHTML = msg;
        msgBox.className = isHost === true ? 'ReceivedMsgBox' : 'SendMsgBox';

        msgContainer.appendChild(msgBox);

        root.appendChild(msgContainer);
        root.scrollTop = root.scrollHeight;
      });

      if (this.uuid !== undefined) {
        this.statusSocket = new WebSocket(
          `wss://api.pintalk.app/ws/status/${this.uuid}/`
        );

        this.statusSocket.addEventListener('open', () => {
          console.log('status socket opened');
        });

        this.statusSocket.addEventListener('error', (error) => {
          reject(error);
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

  getDatetime() {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    return now.toISOString().substring(0, 19);
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

  disconnect() {
    if (
      this.clientSocket != null &&
      this.clientSocket.readyState === WebSocket.OPEN
    ) {
      this.clientSocket.close();
      const message = JSON.stringify({
        type: 'notice',
        is_host: false,
        message: 'offline',
        datetime: this.getDatetime(),
      });
      this.statusSocket?.send(message);
      // this.statusSocket.close();
    }
  }
}
