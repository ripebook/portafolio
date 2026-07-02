import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Grid } from '@react-three/drei';

export default function NeonGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        position={[0, -1.5, 0]}
        args={[100, 100]}
        cellSize={0.5}
        cellThickness={0.8}
        cellColor="#1a3a1a"
        sectionSize={2.5}
        sectionThickness={1.2}
        sectionColor="#00ff41"
        fadeDistance={25}
        infiniteGrid
      />
    </group>
  );
}
