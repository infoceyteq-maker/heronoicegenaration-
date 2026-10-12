'use client';

import React from 'react';
import { ARTIST_DATA } from '@/lib/constants';
import { Play } from 'lucide-react';

export default function MainUI() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-8 md:px-24 py-12 pointer-events-none">
      
      {/* Top Navbar */}
      <nav className="flex justify-between items-center pointer-events-auto">
        <div className="tracking-wider">
          <span className="text-xl md:text-2xl font-black text-white uppercase tracking-widest block font-orbitron">
            NOISE GENERATION
          </span>
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase font-semibold">
            {ARTIST_DATA.label}
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm text-gray-400 font-semibold tracking-widest uppercase">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#music" className="hover:text-white transition">Music</a>
          <a href="#labels" className="hover:text-white transition">Labels</a>
        </div>
      </nav>

      {/* Main Hero Content - Left Aligned exactly like the image */}
      <div className="max-w-3xl mt-12 md:mt-0 pointer-events-auto">
        <p className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 font-bold">
          DIGITAL SOUND WAVES
        </p>

        <h1 className="text-6xl md:text-[7.5rem] font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 font-orbitron drop-shadow-2xl">
          NOISE <br />
          <span className="text-gray-300">GENERATION</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-light">
          {ARTIST_DATA.bio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-5 items-center">
          <a
            href={ARTIST_DATA.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-gray-200 transition-all flex items-center gap-3 shadow-2xl"
          >
            <Play size={16} fill="black" /> GET STARTED
          </a>

          <a
            href={`mailto:${ARTIST_DATA.email}`}
            className="px-10 py-4 rounded-full bg-transparent border border-gray-500 text-white text-xs font-bold tracking-widest uppercase hover:border-white hover:bg-white/5 transition-all"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Footer Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest border-t border-white/10 pt-8 mt-12 pointer-events-auto">
        <div className="flex gap-6 uppercase font-bold">
          <a href={ARTIST_DATA.links.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Spotify</a>
          <a href={ARTIST_DATA.links.beatport} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Beatport</a>
          <a href={ARTIST_DATA.links.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">SoundCloud</a>
        </div>
        <div className="hidden md:block">PROGRESSIVE HOUSE / MELODIC TECHNO</div>
      </div>

    </div>
  );
}
