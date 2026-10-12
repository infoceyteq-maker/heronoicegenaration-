import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { technoAudio } from '@/utils/technoAudio';

interface AudioSphereProps {
  mousePosition?: { x: number; y: number };
}

export default function AudioSphere({ mousePosition = { x: 0, y: 0 } }: AudioSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const chromeWireframeRef = useRef<THREE.LineSegments>(null);
  const neonWireframeRef = useRef<THREE.LineSegments>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const soundRing1Ref = useRef<THREE.Mesh>(null);
  const soundRing2Ref = useRef<THREE.Mesh>(null);
  const outerMatrixRef = useRef<THREE.Group>(null);

  // High-detail icosahedron geometry for Cinema 4D / Octane style soundwave displacement
  const baseGeometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2.35, 4);
  }, []);

  // Cache initial vertex positions
  const originalPositions = useMemo(() => {
    return baseGeometry.attributes.position.clone();
  }, [baseGeometry]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const energy = technoAudio.getEnergy();

    // 1. Mouse Parallax & Smooth Multi-axis Rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (0.28 + energy.mid * 0.35);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.4 + Math.sin(time * 0.4) * 0.08,
        0.05
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        -mousePosition.x * 0.4,
        0.05
      );

      // Audio-reactive scale pulse on the kick drum (low frequencies)
      const scaleBase = 1 + energy.low * 0.22 + Math.sin(time * 2.5) * 0.02;
      meshRef.current.scale.set(scaleBase, scaleBase, scaleBase);
    }

    // 2. Inner Glowing Singularity
    if (innerCoreRef.current) {
      const corePulse = 0.9 + energy.low * 0.45;
      innerCoreRef.current.scale.set(corePulse, corePulse, corePulse);
      innerCoreRef.current.rotation.y -= delta * 0.8;
      innerCoreRef.current.rotation.x += delta * 0.3;
    }

    // 3. Equatorial Soundwave Orbit Rings
    if (soundRing1Ref.current) {
      soundRing1Ref.current.rotation.z += delta * 0.5;
      soundRing1Ref.current.rotation.x = Math.PI / 2.3 + Math.sin(time * 0.6) * 0.15;
      const ringScale = 1 + energy.mid * 0.3;
      soundRing1Ref.current.scale.set(ringScale, ringScale, 1);
    }

    if (soundRing2Ref.current) {
      soundRing2Ref.current.rotation.z -= delta * 0.4;
      soundRing2Ref.current.rotation.y = Math.PI / 4 + Math.cos(time * 0.5) * 0.12;
      const ringScale2 = 1 + energy.low * 0.35;
      soundRing2Ref.current.scale.set(ringScale2, ringScale2, 1);
    }

    // 4. Outer Cyber Matrix Mesh Cage Animation
    if (outerMatrixRef.current) {
      outerMatrixRef.current.rotation.y -= delta * 0.15;
      outerMatrixRef.current.rotation.x += delta * 0.08;
      const matrixPulse = 1 + energy.low * 0.12;
      outerMatrixRef.current.scale.set(matrixPulse, matrixPulse, matrixPulse);
    }

    // 4. Photorealistic Frequency Waveform Vertex Deformation
    const posAttr = baseGeometry.attributes.position;
    const origPos = originalPositions.array as Float32Array;
    const currentPos = posAttr.array as Float32Array;
    const vertexCount = posAttr.count;

    const bassWave = energy.low * 0.65;
    const synthWave = energy.mid * 0.4;
    const trebleSpike = energy.high * 0.25;

    for (let i = 0; i < vertexCount; i++) {
      const i3 = i * 3;
      const ox = origPos[i3];
      const oy = origPos[i3 + 1];
      const oz = origPos[i3 + 2];

      const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1;
      const nx = ox / len;
      const ny = oy / len;
      const nz = oz / len;

      // Multi-octave harmonic soundwave equation
      const wavePrimary =
        Math.sin(ox * 2.8 + time * 4.2) *
        Math.cos(oy * 2.8 + time * 3.6) *
        Math.sin(oz * 2.8 + time * 3.9);

      const waveSecondary =
        Math.sin(ox * 6.5 + time * 6.0) *
        Math.cos(oz * 6.5 + time * 5.2) * 0.4;

      const displacement =
        len +
        wavePrimary * (0.15 + bassWave * 0.55 + synthWave * 0.3) +
        waveSecondary * (0.05 + trebleSpike * 0.35);

      currentPos[i3] = nx * displacement;
      currentPos[i3 + 1] = ny * displacement;
      currentPos[i3 + 2] = nz * displacement;
    }

    posAttr.needsUpdate = true;
    baseGeometry.computeVertexNormals();

    if (chromeWireframeRef.current && meshRef.current) {
      chromeWireframeRef.current.rotation.copy(meshRef.current.rotation);
      chromeWireframeRef.current.scale.copy(meshRef.current.scale);
    }

    if (neonWireframeRef.current && meshRef.current) {
      neonWireframeRef.current.rotation.copy(meshRef.current.rotation);
      neonWireframeRef.current.scale.copy(meshRef.current.scale);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Sleek Chrome / Dark Metallic Physical Surface (Octane Render style) */}
      <mesh ref={meshRef} geometry={baseGeometry}>
        <meshPhysicalMaterial
          color="#060814"
          emissive="#2b005e"
          emissiveIntensity={0.8}
          roughness={0.12}
          metalness={0.96}
          reflectivity={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.25}
          thickness={1.5}
          transparent={true}
          opacity={0.92}
        />
      </mesh>

      {/* 2. Sleek Chrome Wireframe Facet Grid */}
      <lineSegments ref={chromeWireframeRef}>
        <wireframeGeometry args={[baseGeometry]} />
        <lineBasicMaterial
          color="#d1d5db"
          transparent
          opacity={0.45}
          linewidth={1}
        />
      </lineSegments>

      {/* 3. Glowing Neon Cyan & Dark Purple Frequency Wireframe Edge Highlights */}
      <lineSegments ref={neonWireframeRef} scale={1.003}>
        <wireframeGeometry args={[baseGeometry]} />
        <lineBasicMaterial
          color="#00f2fe"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 4. Deep Violet / Hot Pink Inner Energy Core Singularity */}
      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshStandardMaterial
          color="#7f00ff"
          emissive="#ec4899"
          emissiveIntensity={3.2}
          roughness={0.15}
          metalness={0.1}
        />
      </mesh>

      {/* 5. Soundwave Frequency Equatorial Orbit Ring 1 (Neon Cyan) */}
      <mesh ref={soundRing1Ref}>
        <torusGeometry args={[3.2, 0.022, 16, 120]} />
        <meshStandardMaterial
          color="#00f2fe"
          emissive="#00f2fe"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 6. Soundwave Frequency Equatorial Orbit Ring 2 (Electric Purple) */}
      <mesh ref={soundRing2Ref}>
        <torusGeometry args={[3.65, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#7f00ff"
          emissive="#7f00ff"
          emissiveIntensity={1.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 7. Abstract Cyberpunk Holographic Matrix Mesh Cage */}
      <group ref={outerMatrixRef}>
        <lineSegments>
          <wireframeGeometry args={[new THREE.IcosahedronGeometry(3.1, 1)]} />
          <lineBasicMaterial
            color="#00f2fe"
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
        <points>
          <icosahedronGeometry args={[3.1, 1]} />
          <pointsMaterial
            color="#ec4899"
            size={0.09}
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </group>
  );
}
