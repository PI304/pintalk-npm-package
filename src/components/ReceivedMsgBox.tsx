import * as React from 'react';
import { type ReceivedMsgBoxProps } from '../types/props';

const ReceivedMsgBox = ({ receivedData }: ReceivedMsgBoxProps) => {
  return <div className={'ReceivedMsgBox'}>{receivedData}</div>;
};

export default ReceivedMsgBox;
