import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Attribute } from '../index';
import axios, { type AxiosResponse } from 'axios';
import SocketClient from '../socket/SocketClient';

const MsgContainerFooter = () => {
  const getCookie = (name: string) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value != null ? value[2] : null;
  };

  const [socketClient, setSocketClient] = useState<SocketClient | null>();
  const [roomName, setRoomName] = useState<string | null>(
    getCookie('name') != null ? getCookie('name') : null
  );

  useEffect(() => {
    setSocketClient(roomName != null ? new SocketClient(roomName) : null);
  }, []);

  const attr = useContext(Attribute);
  const [message, setMessage] = useState<string>();
  const [hasValue, setHasValue] = useState<boolean>(false);

  const onChangeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value.length !== 0) setHasValue(true);
    else setHasValue(false);
  };

  const createChat = async () => {
    try {
      return await axios.post(
        'https://api.pintalk.app/api/chat/',
        {},
        {
          headers: {
            Accept: 'application/json; version=1',
            'X-PinTalk-Access-Key': attr?.accessKey,
            'X-PinTalk-Secret-Key': attr?.secretKey,
          },
        }
      );
    } catch (error) {
      console.log(error);
      if (error.response.data.code === 401) {
        throw new Error(error.response.data.detail);
      }
      throw new Error(error.response.data.detail);
    }
  };

  const setCookie = (name: string, value: string, exp: number) => {
    const date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  };

  const onCreateChat = () => {
    void createChat().then((r: AxiosResponse<chatResult>) => {
      if (r != null) {
        setCookie('name', r.data.name, 7);
        setRoomName(getCookie('name'));
        setSocketClient(new SocketClient(r.data.name));
      }
      socketClient?.sendMessage(message);
    });
  };

  const onSendMsg = () => {
    socketClient?.sendMessage(message);
  };

  const btnTextColor = {
    color: hasValue ? '#2F80ED' : '#A7A7A7',
  };

  return (
    <div className={'MsgContainerFooter'}>
      <div className={'MsgContainerFooterTextBox'}>
        <div className={'MsgContainerFooterText'}>
          <textarea
            value={message}
            onChange={onChangeMsgValue}
            placeholder={'메시지 작성하기'}
          />
        </div>
        <div
          className={'MsgContainerFooterSendBtn'}
          onClick={
            hasValue ? (roomName != null ? onSendMsg : onCreateChat) : undefined
          }
          style={btnTextColor}
        >
          전송
        </div>
      </div>
    </div>
  );
};

export default MsgContainerFooter;
