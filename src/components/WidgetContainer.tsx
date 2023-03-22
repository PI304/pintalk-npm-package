import * as React from 'react';
import '../styles/styles.scss';

// import widget from '../../public/image/img.png';
import MsgContainer from './MsgContainer';
import { OpenLogo, CloseLogo } from '../svgs';
import { useState } from 'react';

const WidgetContainer = () => {
  const [widgetOpen, setWidgetOpen] = useState<boolean>(false);

  const onShowMessageContainer = () => {
    setWidgetOpen(!widgetOpen);
  };
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
