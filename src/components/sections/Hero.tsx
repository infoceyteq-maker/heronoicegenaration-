import React from 'react';
import { Play, Pause, ChevronDown, Radio, ExternalLink, Disc, Calendar } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

interface HeroProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Hero({ isPlayingAudio, onToggleAudio }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
      {/* Top Metadata Kicker */}
      <div>
        <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] text-slate-300 uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>DIGITAL SOUND WAVES</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>SRI LANKA UNDERGROUND</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-400 font-semibold">123 BPM PROGRESSIVE</span>
        </div>
      </div>

      {/* Main Hero Content - Left Aligned Bold Pure White Typography */}
      <div className="my-auto max-w-3xl space-y-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.9] tracking-tighter uppercase font-orbitron drop-shadow-2xl">
          NOISE <br />
          <span className="text-slate-200">GENERATION</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-light">
          {ARTIST_DATA.bio}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          {/* Primary Action: Listen on Spotify */}
          <a
            href={ARTIST_DATA.links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-full bg-white hover:bg-slate-200 text-black text-xs font-black tracking-widest uppercase transition-all flex items-center gap-2.5 shadow-2xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          >
            <Play size={15} fill="black" /> LISTEN ON SPOTIFY
          </a>

          {/* Secondary Action: Bookings */}
          <a
            href="#booking"
            className="px-9 py-4 rounded-full bg-transparent border border-white/40 hover:border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2.5 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
          >
            <Calendar size={15} /> BOOKINGS
          </a>

          {/* Audio Synthesizer Trigger Button */}
          <button
            type="button"
            onClick={onToggleAudio}
            className={`px-6 py-4 rounded-full border text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
              isPlayingAudio
                ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-black/60 border-white/20 text-slate-300 hover:text-white hover:border-white/50'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Pause size={15} />
                <span>PAUSE 123 BPM ENGINE</span>
              </>
            ) : (
              <>
                <Play size={15} />
                <span>PLAY 123 BPM ENGINE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Bottom Bar / Quick Exploration Cues */}
      <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-5 uppercase">
          <span>ORIGIN: POLONNARUWA, LK</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span>IMPRINT: NOISE IN HARMONY</span>
          <span aria-hidden="true" className="text-slate-700">|</span>
          <span className="text-amber-400 font-semibold">EST. 2008</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-white transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
        >
          <span>EXPLORE BIOGRAPHY</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
