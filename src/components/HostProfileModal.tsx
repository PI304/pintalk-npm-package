import * as React from 'react';
import { ModalCloseButton, OnCircle, OffCircle } from '../svgs';
import { useContext } from 'react';
import { Client } from '../index';
import { type HostProfileModalProps } from '../types/props';

const HostProfileModal = ({ setModalOpen, status }: HostProfileModalProps) => {
  const client = useContext(Client);

  const onCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={'Modal'} onClick={onCloseModal}>
      <div className={'ModalContainer'}>
        <div className={'ModalCloseButton'} onClick={onCloseModal}>
          {ModalCloseButton}
        </div>
        <div className={'ModalProfileImg'}>
          <img src={client?.profileImage} alt={'유저 프로필'} />
        </div>
        <div className={'ModalServiceName'}>{client?.serviceName}</div>
        <div className={'ModalOnOff'}>
          {status ? OnCircle : OffCircle}
          {status ? '온라인' : '오프라인'}
        </div>
        <div className={'ModalDescription'}>{client?.description}</div>
      </div>
    </div>
  );
};

export default HostProfileModal;
