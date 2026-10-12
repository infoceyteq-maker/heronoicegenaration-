'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Utility to verify WebGL capability
function checkWebGLSupport(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

  useEffect(() => {
    // 1. Verify WebGL availability
    if (!checkWebGLSupport()) {
      setWebGLSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 2. Scene & Environment
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.FogExp2(0x050508, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // HDR Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.8;
      container.appendChild(renderer.domElement);
    } catch {
      setWebGLSupported(false);
      return;
    }

    // 3. Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Primary Golden/Amber Light (Massive Boost for Golden Glow)
    const goldenLight1 = new THREE.PointLight(0xffaa00, 30, 30);
    goldenLight1.position.set(5, 3, 2);
    scene.add(goldenLight1);

    // Secondary Warm Light from bottom right
    const goldenLight2 = new THREE.DirectionalLight(0xff8800, 3.5);
    goldenLight2.position.set(3, -2, 4);
    scene.add(goldenLight2);

    // Subtle Cool Fill Light (Top Left) to create contrast
    const cyanLight = new THREE.PointLight(0xe0f2fe, 10, 25);
    cyanLight.position.set(-6, 4, -2);
    scene.add(cyanLight);

    // 4. High-Shine Reflective 3D Audio Sculpture
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 220, 36);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x111115, // Dark base to reflect gold beautifully
      metalness: 1.0,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = window.innerWidth > 768 ? 2.5 : 0;
    scene.add(mesh);

    // 5. Floating Embers (Background Sparks)
    const emberCount = prefersReducedMotion ? 100 : 300;
    const emberGeo = new THREE.BufferGeometry();
    const emberPos = new Float32Array(emberCount * 3);

    for (let i = 0; i < emberCount * 3; i += 3) {
      emberPos[i] = (Math.random() - 0.5) * 20;
      emberPos[i + 1] = (Math.random() - 0.5) * 15;
      emberPos[i + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));

    const emberMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffaa00,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const embers = new THREE.Points(emberGeo, emberMat);
    scene.add(embers);

    // 6. Shooting Stars
    const shootingStars: { mesh: THREE.Mesh; speed: number }[] = [];
    const starGeo = new THREE.CylinderGeometry(0.008, 0.008, 3, 4);
    const starMat = new THREE.MeshBasicMaterial({
      color: 0xfff0c2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    if (!prefersReducedMotion) {
      for (let i = 0; i < 7; i++) {
        const star = new THREE.Mesh(starGeo, starMat);
        star.position.set(
          Math.random() * 20,
          Math.random() * 20,
          (Math.random() - 0.5) * 15 - 5
        );
        star.rotation.z = -Math.PI / 4;
        scene.add(star);

        shootingStars.push({
          mesh: star,
          speed: Math.random() * 0.3 + 0.3,
        });
      }
    }

    // 7. Mouse Parallax (respecting reduced motion)
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Object Rotation
      if (prefersReducedMotion) {
        mesh.rotation.y = time * 0.04;
      } else {
        mesh.rotation.y = time * 0.2 + mouseX * 2;
        mesh.rotation.x = time * 0.15 + mouseY * 2;
        mesh.position.y = Math.sin(time * 1.5) * 0.15;
      }

      // Move Floating Embers Upwards
      const pos = emberGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < emberCount * 3; i += 3) {
        pos[i] += prefersReducedMotion ? 0.002 : 0.006;
        if (pos[i] > 8) pos[i] = -8;
      }
      emberGeo.attributes.position.needsUpdate = true;

      // Animate Shooting Stars
      if (!prefersReducedMotion) {
        shootingStars.forEach((star) => {
          star.mesh.position.x -= star.speed;
          star.mesh.position.y -= star.speed;

          if (star.mesh.position.x < -15 || star.mesh.position.y < -15) {
            star.mesh.position.x = 15 + Math.random() * 15;
            star.mesh.position.y = 15 + Math.random() * 15;
            star.mesh.position.z = (Math.random() - 0.5) * 15 - 5;
            star.speed = Math.random() * 0.3 + 0.2;
          }
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // 9. Responsive Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mesh.position.x = window.innerWidth > 768 ? 2.5 : 0;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // 10. Clean Cleanup on Unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      emberGeo.dispose();
      emberMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  // Graceful fallback if WebGL is unavailable
  if (!webGLSupported) {
    return (
      <div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#050508] flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600/20 via-purple-900/10 to-transparent blur-3xl animate-pulse" />
        <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-amber-500/30 opacity-40" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
