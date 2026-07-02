import React, { lazy, Suspense } from 'react';
import { SceneErrorBoundary } from './SceneErrorBoundary';
import useDevicePerformance from '../../hooks/useDevicePerformance';
import CSSFallbackBackground from './CSSFallbackBackground';

// Lazy load para los componentes 3D que jalan Three.js y React Three Fiber
const CyberpunkCanvas = lazy(() => import('./CyberpunkCanvas'));

export default function CyberpunkScene() {
  const { isMobile, isLowEnd } = useDevicePerformance();

  return (
    <SceneErrorBoundary>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        {isMobile ? (
          // En móviles cargamos directamente el fondo CSS para máximo rendimiento
          <CSSFallbackBackground />
        ) : (
          // En desktop cargamos el Canvas 3D de forma perezosa, usando el fondo CSS como fallback de carga (Suspense)
          <Suspense fallback={<CSSFallbackBackground />}>
            <CyberpunkCanvas isLowEnd={isLowEnd} />
          </Suspense>
        )}
      </div>
    </SceneErrorBoundary>
  );
}

