import { useState, useEffect } from 'react';

export default function useDevicePerformance() {
  const [performance, setPerformance] = useState({
    isMobile: false,
    isLowEnd: false,
    reduceMotion: false,
  });

  useEffect(() => {
    // 1. Detect mobile/small screen via matchMedia
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    // 2. Detect prefers-reduced-motion setting
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 3. Detect low-end hardware (if APIs are available)
    const checkLowEnd = () => {
      // If it has few cores or low memory (non-standard APIs in some browsers, hence the fallbacks)
      const cores = navigator.hardwareConcurrency || 4;
      // deviceMemory is in GB. E.g.: 2 or 4 GB is usually low-end in modern devices
      const memory = navigator.deviceMemory || 8; 
      
      // Slow connection can also be considered as low-end for heavy resources
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConnection = connection ? (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) : false;

      return cores < 4 || memory < 4 || isSlowConnection;
    };

    const updatePerformance = () => {
      setPerformance({
        isMobile: mobileQuery.matches,
        isLowEnd: checkLowEnd(),
        reduceMotion: motionQuery.matches,
      });
    };

    // Initialize values
    updatePerformance();

    // Listeners for dynamic changes
    const handleMobileChange = () => {
      setPerformance((prev) => ({ ...prev, isMobile: mobileQuery.matches }));
    };

    const handleMotionChange = () => {
      setPerformance((prev) => ({ ...prev, reduceMotion: motionQuery.matches }));
    };

    // Support for older browsers (e.g. older Safari)
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', handleMobileChange);
      motionQuery.addEventListener('change', handleMotionChange);
    } else {
      mobileQuery.addListener(handleMobileChange);
      motionQuery.addListener(handleMotionChange);
    }

    return () => {
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener('change', handleMobileChange);
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        mobileQuery.removeListener(handleMobileChange);
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  return performance;
}
