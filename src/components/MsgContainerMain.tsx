import * as React from 'react';
import { useEffect, useRef } from 'react';
import { type MsgContainerMainProps } from '../types/props';

const MsgContainerMain = ({ socketClient }: MsgContainerMainProps) => {
  const targetRef = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (socketClient !== null) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && socketClient.getIsInitialized()) {
            console.log('Intersection detected!');
            socketClient.requestPastMessages();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(targetRef.current);
    }
  }, [socketClient]);

  return (
    <div className={'MsgContainerMain'}>
      <div
        style={{
          width: '100%',
          height: '0.3rem',
        }}
        ref={targetRef}
      ></div>
      <div className={'MsgContainerMainDate'}>3/15(수)</div>
    </div>
  );
};

export default MsgContainerMain;
