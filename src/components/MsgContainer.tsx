import * as React from 'react';
import MsgContainerHeader from './MsgContainerHeader';
import MsgContainerFooter from './MsgContainerFooter';
import MsgContainerMain from './MsgContainerMain';
import { useContext, useEffect, useState } from 'react';
import { SocketClient, getCookie, setCookie } from '../utils';
import axios, { type AxiosResponse } from 'axios';
import { Attribute } from '../index';

const MsgContainer = () => {
  const attr = useContext(Attribute);
  const [roomName, setRoomName] = useState<string | null>(
    getCookie('name') != null ? getCookie('name') : null
  );
  const [socketClient, setSocketClient] = useState<SocketClient | null>(null);

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

  useEffect(() => {
    if (roomName == null) {
      void createChat().then(async (r: AxiosResponse<chatResult>) => {
        if (r != null) {
          setCookie('name', r.data.name, 7);
          setRoomName(getCookie('name'));
        }
      });
    }
    // TODO: 스트릭트 모드
    const socketClientInstance =
      roomName != null ? new SocketClient(roomName, 'msgContainer') : null;
    void socketClientInstance?.connect();
    setSocketClient(socketClientInstance);

    return () => {
      void socketClientInstance?.disconnect();
    };
  }, [roomName]);

  return (
    <div className={'MsgContainer'}>
      <MsgContainerHeader />
      <MsgContainerMain />
      <MsgContainerFooter
        roomName={roomName}
        setRoomName={setRoomName}
        socketClient={socketClient}
        setSocketClient={setSocketClient}
      />
    </div>
  );
};

export default MsgContainer;
