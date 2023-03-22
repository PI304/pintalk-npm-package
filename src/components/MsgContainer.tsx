import * as React from 'react';
import MsgContainerHeader from './MsgContainerHeader';
import MsgContainerFooter from './MsgContainerFooter';
import MsgContainerMain from './MsgContainerMain';

const MsgContainer = () => {
  return (
    <div className={'MsgContainer'}>
      <MsgContainerHeader />
      <MsgContainerMain />
      <MsgContainerFooter />
    </div>
  );
};

export default MsgContainer;
