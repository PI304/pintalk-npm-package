import * as React from 'react';
import { useState } from 'react';
import { type MsgContainerFooterProps } from '../types/props';

const MsgContainerFooter = ({
  roomName,
  socketClient,
}: MsgContainerFooterProps) => {
  const [message, setMessage] = useState<string>();
  const [hasValue, setHasValue] = useState<boolean>(false);

  const onChangeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value.length !== 0) setHasValue(true);
    else setHasValue(false);
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
            hasValue && roomName != null && socketClient != null
              ? onSendMsg
              : undefined
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
