import * as React from 'react';
import { type ReceivedMsgBoxProps } from '../types/props';

const SendMsgBox = ({ receivedData }: ReceivedMsgBoxProps) => {
  return <div className={'SendMsgBox'}>{receivedData}</div>;
};

export default SendMsgBox;
