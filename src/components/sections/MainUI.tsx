'use client';

import React from 'react';
import { Play, Mail, Music, Disc, Youtube, Facebook } from 'lucide-react';

// Inline Safe Constants (Prevents Vite Path Alias Errors)
const ARTIST_DATA = {
  name: "NOISE GENERATION",
  label: "Noise in Harmony Records",
  genre: "Progressive House / Melodic Techno",
  email: "noisegenerationsl@gmail.com",
  bio: "Underground Progressive House & Melodic Techno DJ and producer sculpting immersive hypnotic soundscapes, atmospheric deep basslines, and emotional melodies from Sri Lanka to global underground dancefloors.",
  links: {
    spotify: "https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj?si=sF_A0h44SV2T94lRAIXUFQ",
    beatport: "https://www.beatport.com/artist/noise-generation/1104954",
    soundcloud: "https://soundcloud.com/noise-generation/sets",
    youtube: "https://youtube.com/channel/UCkd321S7hWF_QJ0cUxorQkQ?si=MiP7A1RXKDs_0dbz",
    facebook: "https://web.facebook.com/Noisegenerationworld",
  }
};

export default function MainUI() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between px-6 md:px-20 py-10 pointer-events-none">
      
      {/* Top Navbar */}
      <nav className="flex justify-between items-center pointer-events-auto">
        <div className="tracking-wider">
          <span className="text-xl md:text-2xl font-black text-white uppercase tracking-widest block font-orbitron">
            {ARTIST_DATA.name}
          </span>
          <span className="text-xs text-gray-500 tracking-[0.2em] uppercase font-semibold">
            {ARTIST_DATA.label}
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs text-gray-400 font-bold tracking-widest uppercase">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#music" className="hover:text-white transition">Music</a>
          <a href="#labels" className="hover:text-white transition">Labels</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-3xl mt-12 md:mt-0 pointer-events-auto">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-3 font-bold">
          DIGITAL SOUND WAVES
        </p>

        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6 font-orbitron">
          NOISE <br />
          <span className="text-gray-300">GENERATION</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light">
          {ARTIST_DATA.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={ARTIST_DATA.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-black tracking-widest uppercase hover:bg-gray-200 transition-all flex items-center gap-2 shadow-2xl"
          >
            <Play size={15} fill="black" /> LISTEN ON SPOTIFY
          </a>

          <a
            href={`mailto:${ARTIST_DATA.email}`}
            className="px-8 py-3.5 rounded-full bg-transparent border border-gray-600 text-white text-xs font-bold tracking-widest uppercase hover:border-white hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Mail size={15} /> BOOKINGS
          </a>
        </div>
      </div>

      {/* Footer Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-widest border-t border-white/10 pt-6 mt-8 pointer-events-auto gap-4">
        <div className="flex gap-6 uppercase font-bold">
          <a href={ARTIST_DATA.links.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1"><Music size={14} /> Spotify</a>
          <a href={ARTIST_DATA.links.beatport} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1"><Disc size={14} /> Beatport</a>
          <a href={ARTIST_DATA.links.soundcloud} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1"><Music size={14} /> SoundCloud</a>
          <a href={ARTIST_DATA.links.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1"><Youtube size={14} /> YouTube</a>
          <a href={ARTIST_DATA.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1"><Facebook size={14} /> Facebook</a>
        </div>
        <div className="hidden md:block uppercase font-semibold">
          SRI LANKA / GLOBAL
        </div>
      </div>

    </div>
  );
}
