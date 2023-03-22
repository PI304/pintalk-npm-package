import { HeaderLogo, OnOffCircle } from '../svgs';
import * as React from 'react';

const MsgContainerHeader = () => {
  return (
    <div className={'MsgContainerHeader'}>
      <div className={'MsgContainerHeaderLogo'}>{HeaderLogo}</div>
      <div className={'MsgContainerHeaderContent'}>
        <div className={'MsgContainerHeaderText'}>
          <div className={'MsgContainerHeaderOnOff'}>{OnOffCircle}온라인</div>
          PinTalk
        </div>
      </div>
      <div className={'MsgContainerHeaderMenu'}></div>
    </div>
  );
};

export default MsgContainerHeader;
