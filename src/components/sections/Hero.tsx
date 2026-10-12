import React from 'react';
import { Play, Pause, ChevronDown, Disc, Radio, ExternalLink } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

interface HeroProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Hero({ isPlayingAudio, onToggleAudio }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Metadata Kicker */}
      <div className="pt-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f2fe] uppercase bg-[#030305]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" />
          <span>SRI LANKA UNDERGROUND</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>EST. 2008</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>123 BPM MELODIC TECHNO</span>
        </div>
      </div>

      {/* Main Hero Typography & Call-To-Actions */}
      <div className="my-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <p className="font-orbitron text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#7f00ff] uppercase">
            PRADEEP DISSANAYAKA PRESENTS
          </p>

          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] drop-shadow-[0_0_35px_rgba(0,242,254,0.2)]">
            NOISE <br />
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#7f00ff] to-[#ec4899] bg-clip-text text-transparent">
              GENERATION
            </span>
          </h1>
        </div>

        <p className="font-orbitron text-lg sm:text-2xl text-slate-200 tracking-wider font-light">
          &ldquo;{ARTIST_DATA.tagline}&rdquo;
        </p>

        <p className="font-rajdhani text-lg sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
          Pioneering Sri Lankan Progressive House & Melodic Techno artist. Architect of hypnotic analog basslines,
          spatial cinematic atmospheres, and founder of{' '}
          <span className="text-[#00f2fe] font-semibold">Noise in Harmony Records</span>.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleAudio}
            className="px-6 py-3.5 bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] hover:from-white hover:to-[#00f2fe] text-black font-orbitron font-bold text-xs tracking-widest rounded-xl transition-all shadow-[0_0_30px_rgba(0,242,254,0.4)] flex items-center gap-2.5 group cursor-pointer"
          >
            {isPlayingAudio ? (
              <>
                <Pause className="w-4 h-4 fill-black" />
                <span>PAUSE 3D SOUNDWAVE</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" />
                <span>START 3D SOUNDWAVE</span>
              </>
            )}
          </button>

          {/* Direct Beatport / Spotify Link */}
          <a
            href="https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-[#080912]/80 hover:bg-slate-900 border border-slate-700/80 hover:border-[#00f2fe] text-slate-200 hover:text-white font-rajdhani font-semibold text-sm tracking-wider rounded-xl transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Radio className="w-4 h-4 text-[#1DB954]" />
            <span>SPOTIFY CATALOG</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="https://www.beatport.com/artist/noise-generation/1104954"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-[#080912]/80 hover:bg-slate-900 border border-slate-700/80 hover:border-[#00f2fe] text-slate-200 hover:text-white font-rajdhani font-semibold text-sm tracking-wider rounded-xl transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
          >
            <Disc className="w-4 h-4 text-[#00f2fe]" />
            <span>BEATPORT STORE</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Cue */}
      <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800/80">
        <div className="flex items-center gap-6 text-xs font-rajdhani font-semibold text-slate-400 uppercase tracking-widest">
          <div>
            <span className="text-slate-500 block text-[10px] font-mono">LOCATION</span>
            <span className="text-white">Polonnaruwa, LK</span>
          </div>
          <span className="text-slate-800">|</span>
          <div>
            <span className="text-slate-500 block text-[10px] font-mono">RECORD LABEL</span>
            <span className="text-[#00f2fe]">Noise in Harmony</span>
          </div>
          <span className="text-slate-800">|</span>
          <div>
            <span className="text-slate-500 block text-[10px] font-mono">SIGNED IMPRINTS</span>
            <span className="text-[#ec4899]">9+ Global Labels</span>
          </div>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#00f2fe] transition-colors group cursor-pointer"
        >
          <span>EXPLORE BIOGRAPHY</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
