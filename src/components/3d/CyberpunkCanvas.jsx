import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import NeonGrid from './NeonGrid';
import FloatingParticles from './FloatingParticles';

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1.0, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function PostEffects() {
  // Eliminamos ChromaticAberration por ser extremadamente pesada y apenas visible
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={0.8}
        mipmapBlur
      />
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
}

export default function CyberpunkCanvas({ isLowEnd }) {
  // Ajustar número de partículas y deshabilitar postprocessing en desktop de menor potencia
  const particleCount = isLowEnd ? 60 : 150;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ 
        antialias: !isLowEnd, 
        powerPreference: "high-performance", 
        failIfMajorPerformanceCaveat: true,
        precision: isLowEnd ? "mediump" : "highp"
      }}
      onError={() => {}}
    >
      <color attach="background" args={["#020202"]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00ff41" />

      <NeonGrid />
      <FloatingParticles count={particleCount} />
      <CameraRig />

      {!isLowEnd && <PostEffects />}
    </Canvas>
  );
}
