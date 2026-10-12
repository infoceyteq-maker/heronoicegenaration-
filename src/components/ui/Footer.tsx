import React from 'react';
import { Radio, Disc, Music, Youtube, Facebook, ArrowUp } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#020204] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand identity */}
        <div className="space-y-2 text-center md:text-left">
          <div className="font-orbitron font-extrabold text-lg text-white tracking-[0.2em] flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-[#00f2fe] rounded-xs rotate-45" />
            <span>NOISE GENERATION</span>
          </div>
          <p className="font-rajdhani text-sm text-slate-400 font-medium">
            Pradeep Dissanayaka · Founder of Noise in Harmony Records · Sri Lanka
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-[#1DB954] hover:border-slate-700 transition-colors"
            title="Spotify"
            aria-label="Noise Generation on Spotify"
          >
            <Radio className="w-4 h-4" />
          </a>
          <a
            href="https://www.beatport.com/artist/noise-generation/1104954"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-[#00f2fe] hover:border-slate-700 transition-colors"
            title="Beatport"
            aria-label="Noise Generation on Beatport"
          >
            <Disc className="w-4 h-4" />
          </a>
          <a
            href="https://soundcloud.com/noise-generation/sets"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-[#ff5500] hover:border-slate-700 transition-colors"
            title="SoundCloud"
            aria-label="Noise Generation on SoundCloud"
          >
            <Music className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com/channel/UCkd321S7hWF_QJ0cUxorQkQ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-[#ff0000] hover:border-slate-700 transition-colors"
            title="YouTube"
            aria-label="Noise Generation on YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="https://web.facebook.com/Noisegenerationworld"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-[#1877f2] hover:border-slate-700 transition-colors"
            title="Facebook"
            aria-label="Noise Generation on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll To Top */}
        <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
          <span>&copy; {new Date().getFullYear()} NOISE GENERATION</span>
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-[#00f2fe] rounded-lg border border-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
