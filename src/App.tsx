import React, { useState, useEffect } from 'react';
import HeroScene from './components/three/HeroScene';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Labels from './components/sections/Labels';
import RecordLabel from './components/sections/RecordLabel';
import Streaming from './components/sections/Streaming';
import Booking from './components/sections/Booking';
import Footer from './components/ui/Footer';
import { technoAudio } from '@/utils/technoAudio';

export default function App() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    // Subscribe to audio engine state changes
    const unsubscribe = technoAudio.subscribe((playing) => {
      setIsPlayingAudio(playing);
    });

    return () => {
      unsubscribe();
      // Ensure audio stops if App component unmounts
      technoAudio.stop();
    };
  }, []);

  const handleToggleAudio = () => {
    const active = technoAudio.togglePlay();
    setIsPlayingAudio(active);
  };

  return (
    <main className="relative min-h-screen bg-[#050508] text-white selection:bg-amber-400 selection:text-black">
      {/* 1. Full-screen Three.js 3D Hero Scene (Fixed Background z-0) */}
      <HeroScene />

      {/* 2. Foreground Interactive UI Sections (z-10) */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation Bar */}
        <Navbar
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={handleToggleAudio}
        />

        {/* Hero Section */}
        <Hero
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={handleToggleAudio}
        />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* 01. Biography Section */}
        <About />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>

        {/* 02. Discography & Signed Labels */}
        <Labels />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* 03. Noise in Harmony Records (Founded 2024) */}
        <RecordLabel />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        {/* 04. Streaming Ecosystem */}
        <Streaming />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* 05. Worldwide Booking & Reservations */}
        <Booking />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}