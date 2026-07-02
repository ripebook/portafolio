import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles({ count = 150 }) {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const tempPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      tempPositions[i * 3] = (Math.random() - 0.5) * 20;
      tempPositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      tempPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return tempPositions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.06}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
