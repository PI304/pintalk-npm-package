import { HeaderLogo, OnCircle } from '../svgs';
import * as React from 'react';
import { Client } from '../index';
import { useContext, useState } from 'react';
import HostProfileModal from './HostProfileModal';

const MsgContainerHeader = () => {
  const client = useContext(Client);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isOnline, setIsOnline] = useState(false);

  const onShowModal = () => {
    const statusNode = document.querySelector('.MsgContainerHeaderOnOff')
      ?.childNodes[1];
    setIsOnline(statusNode?.nodeValue === '온라인');
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className={'MsgContainerHeader'}>
        <div className={'MsgContainerHeaderLogo'}>{HeaderLogo}</div>
        <div className={'MsgContainerHeaderContent'}>
          <div className={'MsgContainerHeaderText'} onClick={onShowModal}>
            {client?.configs.useOnlineStatus && (
              <div className={'MsgContainerHeaderOnOff'}>{OnCircle}온라인</div>
            )}
            {client?.serviceName}
          </div>
        </div>
        <div className={'MsgContainerHeaderMenu'}></div>
      </div>
      {modalOpen && (
        <HostProfileModal setModalOpen={setModalOpen} status={isOnline} />
      )}
    </>
  );
};

export default MsgContainerHeader;
