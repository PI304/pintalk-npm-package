import type { SocketClient } from '../utils';

type MsgContainerFooterProps = {
  roomName: string | null;
  setRoomName: (roomName: string | null) => void;
  socketClient: SocketClient | null;
  setSocketClient: (socketClient: SocketClient | null) => void;
};

type MsgContainerProps = {
  isOpen: boolean;
};
