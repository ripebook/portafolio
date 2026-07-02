import React from 'react';
import useDevicePerformance from '../../hooks/useDevicePerformance';

export default function ScanlineOverlay() {
  const { isMobile, isLowEnd, reduceMotion } = useDevicePerformance();

  const showFlicker = !isMobile && !isLowEnd && !reduceMotion;

  return (
    <>
      <div className="crt-scanlines" />
      {showFlicker && <div className="crt-flicker" />}
    </>
  );
}
