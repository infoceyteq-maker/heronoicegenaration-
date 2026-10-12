'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Environment
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.FogExp2(0x050508, 0.05);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    // HDR Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;
    container.appendChild(renderer.domElement);

    // 2. ENHANCED GOLDEN STUDIO LIGHTING
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

    // 3. HIGH-SHINE 3D AUDIO SCULPTURE
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 250, 40);
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

    // 4. Floating Embers (Background Sparks)
    const emberCount = 300;
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

    // 5. SHOOTING STARS (වල්ගා තරු Effect එක)
    const shootingStars: { mesh: THREE.Mesh; speed: number }[] = [];
    const starGeo = new THREE.CylinderGeometry(0.008, 0.008, 3, 4);
    const starMat = new THREE.MeshBasicMaterial({ 
      color: 0xfff0c2, 
      transparent: true, 
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

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
        speed: Math.random() * 0.3 + 0.3
      });
    }

    // 6. Mouse Parallax
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0008;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0008;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Object Rotation
      mesh.rotation.y = time * 0.2 + mouseX * 2;
      mesh.rotation.x = time * 0.15 + mouseY * 2;
      mesh.position.y = Math.sin(time * 1.5) * 0.15;

      // Move Floating Embers Upwards
      const pos = emberGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < emberCount * 3; i += 3) {
        pos[i] += 0.006;
        if (pos[i] > 8) pos[i] = -8;
      }
      emberGeo.attributes.position.needsUpdate = true;

      // Animate Shooting Stars
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

      renderer.render(scene, camera);
    };
    animate();

    // 8. Responsive Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mesh.position.x = window.innerWidth > 768 ? 2.5 : 0;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      emberGeo.dispose();
      emberMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />;
}
