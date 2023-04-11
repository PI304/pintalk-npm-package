import * as React from 'react';
import MsgContainerHeader from './MsgContainerHeader';
import MsgContainerFooter from './MsgContainerFooter';
import MsgContainerMain from './MsgContainerMain';
import { useEffect, useState } from 'react';
import { SocketClient, getCookie } from '../utils';
// import { type MsgContainerProps } from '../types/props';

const MsgContainer = () => {
  const [roomName, setRoomName] = useState<string | null>(
    getCookie('name') != null ? getCookie('name') : null
  );
  const [socketClient, setSocketClient] = useState<SocketClient | null>(null);

  useEffect(() => {
    const socketClientInstance =
      roomName != null ? new SocketClient(roomName) : null;
    setSocketClient(socketClientInstance);

    return () => {
      socketClientInstance?.disconnect();
    };
  }, []);

  // useEffect(() => {
  //     console.log(isOpen);
  //     !isOpen && socketClient?.disconnect();
  // }, [isOpen]);

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
