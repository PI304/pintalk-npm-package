import * as React from 'react';
import { useContext, useState } from 'react';
import { Attribute } from '../index';
import axios from 'axios';

const MsgContainerFooter = () => {
  const attr = useContext(Attribute);
  const [message, setMessage] = useState<string>();
  const [hasValue, setHasValue] = useState<string>('false');

  const onChangeMsgValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (e.target.value.length !== 0) setHasValue('true');
    else setHasValue('false');
  };

  const cookie = getCookie('name');

  const onSendMsg = () => {
    if (cookie === undefined) {
      void createChat().then((r) => {
        r != null && setCookie('name', r.data.name, 7);
      });
    } else {
      console.log(cookie);
    }
  };

  const createChat = async () => {
    try {
      return await axios.post(
        'http://3.34.7.189/api/chat/',
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

  function getCookie(name: string) {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value != null ? value[2] : null;
  }

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
