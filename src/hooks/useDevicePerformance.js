import { useState, useEffect } from 'react';

export default function useDevicePerformance() {
  const [performance, setPerformance] = useState({
    isMobile: false,
    isLowEnd: false,
    reduceMotion: false,
  });

  useEffect(() => {
    // 1. Detectar móvil/pantalla pequeña mediante matchMedia
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    // 2. Detectar preferencia de movimiento reducido
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // 3. Detectar hardware de bajo rendimiento (si las APIs están disponibles)
    const checkLowEnd = () => {
      // Si tiene pocos núcleos o poca memoria (APIs no estándar en algunos browsers, por eso los fallbacks)
      const cores = navigator.hardwareConcurrency || 4;
      // deviceMemory está en GB. Ej: 2 o 4 GB suele ser low-end en dispositivos modernos
      const memory = navigator.deviceMemory || 8; 
      
      // Conexión lenta también puede considerarse como low-end para recursos pesados
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

    // Inicializar valores
    updatePerformance();

    // Listeners para cambios dinámicos
    const handleMobileChange = () => {
      setPerformance((prev) => ({ ...prev, isMobile: mobileQuery.matches }));
    };

    const handleMotionChange = () => {
      setPerformance((prev) => ({ ...prev, reduceMotion: motionQuery.matches }));
    };

    // Soporte para navegadores más antiguos (safari anterior)
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
