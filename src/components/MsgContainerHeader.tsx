import { HeaderLogo, OnOffCircle } from '../svgs';
import * as React from 'react';
import { Client } from '../index';
import { useContext } from 'react';

const MsgContainerHeader = () => {
  const client = useContext(Client);

  return (
    <div className={'MsgContainerHeader'}>
      <div className={'MsgContainerHeaderLogo'}>{HeaderLogo}</div>
      <div className={'MsgContainerHeaderContent'}>
        <div className={'MsgContainerHeaderText'}>
          <div className={'MsgContainerHeaderOnOff'}>{OnOffCircle}온라인</div>
          {client?.serviceName}
        </div>
      </div>
      <div className={'MsgContainerHeaderMenu'}></div>
    </div>
  );
};

export default MsgContainerHeader;
