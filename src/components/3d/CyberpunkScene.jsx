import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import NeonGrid from './NeonGrid';
import FloatingParticles from './FloatingParticles';
import { SceneErrorBoundary } from './SceneErrorBoundary';

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1.0, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function PostEffects() {
  const chromaticOffset = useMemo(() => new THREE.Vector2(0.0015, 0.0015), []);

  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        intensity={1.2}
        mipmapBlur
      />
      <ChromaticAberration offset={chromaticOffset} />
      <Noise opacity={0.03} />
      <Vignette eskil={false} offset={0.1} darkness={1.2} />
    </EffectComposer>
  );
}

export default function CyberpunkScene() {
  return (
    <SceneErrorBoundary>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false }}
          onError={() => {}}
        >
          <color attach="background" args={["#020202"]} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#00ff41" />

          <NeonGrid />
          <FloatingParticles count={200} />
          <CameraRig />

          <PostEffects />
        </Canvas>
      </div>
    </SceneErrorBoundary>
  );
}
