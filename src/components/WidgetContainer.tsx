import * as React from 'react';
import '../styles/styles.scss';
import MsgContainer from './MsgContainer';
import { OpenLogo, CloseLogo } from '../svgs';
import { useState } from 'react';

const WidgetContainer = () => {
  const [widgetOpen, setWidgetOpen] = useState<boolean>(false);

  const onShowMessageContainer = () => {
    setWidgetOpen(!widgetOpen);
  };

  // const cookie = getCookie('guest');
  // if (cookie === null) {
  //     setCookie('guest', r.data.guest, 7);
  // }
  //
  // const setCookie = (name: string, value: string, exp: number) => {
  //   const date = new Date();
  //   date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  //   document.cookie =
  //     name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  // };
  //
  // function getCookie(name: string) {
  //   const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  //   return value != null ? value[2] : null;
  // }

  return (
    <>
      <div className={'WidgetContainer'} onClick={onShowMessageContainer}>
        {widgetOpen ? CloseLogo : OpenLogo}
      </div>
      {widgetOpen && <MsgContainer />}
    </>
  );
};

export default WidgetContainer;
