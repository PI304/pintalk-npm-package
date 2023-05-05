import type { SocketClient } from '../utils';

type MsgContainerFooterProps = {
  roomName: string | null;
  socketClient: SocketClient | null;
};

type MsgContainerProps = {
  isOpen: boolean;
};

type ReceivedMsgBoxProps = {
  receivedData: string;
};
