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

type HostProfileModalProps = {
  setModalOpen: (modalOpen: boolean) => void;
  status: boolean;
};

type MsgContainerMainProps = {
  socketClient: SocketClient | null;
};
