'use client';

import React, { Suspense, lazy } from 'react';
import MainUI from '@/components/sections/MainUI';

// Dynamic import with SSR disabled for 3D Hero Scene
const HeroScene = lazy(() => import('@/components/three/HeroScene'));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090d] text-slate-100 overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* 3D Background - Forced to Back (z-0) with warm amber lighting & floating embers */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-[#08090d]">
              <p className="text-amber-400 text-xs font-mono tracking-[0.25em] animate-pulse">
                INITIALIZING STUDIO AMBIENCE...
              </p>
            </div>
          }
        >
          <HeroScene />
        </Suspense>
      </div>

      {/* UI - Forced to Front (z-10) */}
      <div className="relative z-10 w-full min-h-screen">
        <MainUI />
      </div>
    </main>
  );
}
