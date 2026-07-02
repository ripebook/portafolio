import React, { lazy, Suspense } from 'react';
import { SceneErrorBoundary } from './SceneErrorBoundary';
import useDevicePerformance from '../../hooks/useDevicePerformance';
import CSSFallbackBackground from './CSSFallbackBackground';

// Lazy load the 3D components that import Three.js and React Three Fiber
const CyberpunkCanvas = lazy(() => import('./CyberpunkCanvas'));

export default function CyberpunkScene() {
  const { isMobile, isLowEnd } = useDevicePerformance();

  return (
    <SceneErrorBoundary>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        {isMobile ? (
          // On mobile, render the CSS fallback background directly for maximum performance
          <CSSFallbackBackground />
        ) : (
          // On desktop, lazy load the 3D Canvas, using the CSS background as loading fallback (Suspense)
          <Suspense fallback={<CSSFallbackBackground />}>
            <CyberpunkCanvas isLowEnd={isLowEnd} />
          </Suspense>
        )}
      </div>
    </SceneErrorBoundary>
  );
}

