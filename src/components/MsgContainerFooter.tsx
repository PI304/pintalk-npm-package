import * as React from 'react';
import { useState } from 'react';

const MsgContainerFooter = () => {
  const [message, setMessage] = useState<string>();
  const [hasValue, setHasValue] = useState<string>('false');

  const onChangeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value.length !== 0) setHasValue('true');
    else setHasValue('false');
  };

  const onSendMsg = () => {};

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
          className={`MsgContainerFooterSendBtn ${hasValue}`}
          onClick={onSendMsg}
        >
          전송
        </div>
      </div>
    </div>
  );
};

export default MsgContainerFooter;
