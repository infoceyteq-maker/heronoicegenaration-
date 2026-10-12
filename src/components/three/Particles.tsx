import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { technoAudio } from '@/utils/technoAudio';

interface ParticlesProps {
  count?: number;
}

export default function Particles({ count = 900 }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle galaxy coordinates & colors
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#00f2fe'); // Neon Cyan
    const color2 = new THREE.Color('#7f00ff'); // Electric Purple
    const color3 = new THREE.Color('#ec4899'); // Hot Pink

    for (let i = 0; i < count; i++) {
      // Cylindrical/spherical galaxy distribution
      const radius = 3.5 + Math.random() * 18;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 14;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      // Color variation across the galaxy
      const mixRatio = Math.random();
      const pColor = mixRatio < 0.5
        ? color1.clone().lerp(color2, mixRatio * 2)
        : color2.clone().lerp(color3, (mixRatio - 0.5) * 2);

      col[i * 3] = pColor.r;
      col[i * 3 + 1] = pColor.g;
      col[i * 3 + 2] = pColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const energy = technoAudio.getEnergy();

    // Slow orbital rotation, speed up slightly on drop/energy
    pointsRef.current.rotation.y += delta * (0.04 + energy.overall * 0.08);
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}
