import React from 'react';
import { Disc3, Globe2, Music2, ExternalLink, Play } from 'lucide-react';
import { SIGNED_LABELS, HIGHLIGHT_RELEASES } from '@/lib/constants';

interface LabelsProps {
  onPlayRelease?: (title: string) => void;
}

export default function Labels({ onPlayRelease }: LabelsProps) {
  return (
    <section id="labels" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#7f00ff] uppercase tracking-widest">
          <span>02</span>
          <span aria-hidden="true">·</span>
          <span>DISCOGRAPHY & IMPRINTS</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          SIGNED RECORD LABELS
        </h2>
        <p className="font-rajdhani text-lg sm:text-xl text-slate-400 font-medium max-w-2xl">
          Internationally signed catalog distributed across the most distinguished underground Progressive House and Melodic Techno imprints.
        </p>
      </div>

      {/* 9-Label Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {SIGNED_LABELS.map((label, idx) => (
          <div
            key={label.name}
            className="p-6 bg-[#07080f]/80 backdrop-blur-md border border-slate-800/90 hover:border-[#00f2fe]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden shadow-xl"
          >
            {/* Top row with index & country */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span className="text-slate-500 font-bold">LABEL #0{idx + 1}</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Globe2 className="w-3.5 h-3.5 text-[#00f2fe]" />
                {label.country}
              </span>
            </div>

            {/* Label Name */}
            <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors mb-2">
              {label.name}
            </h3>

            {/* Genre & Active Span */}
            <div className="flex items-center gap-2 text-xs font-rajdhani font-semibold text-slate-400 mb-4 uppercase">
              <span className="text-[#ec4899]">{label.genre}</span>
              <span aria-hidden="true">·</span>
              <span>{label.yearActive}</span>
            </div>

            {/* Highlighted catalog release */}
            {label.highlightTrack && (
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="truncate mr-2">
                  <span className="text-slate-400 text-[10px] block">HIGHLIGHT RELEASE</span>
                  <span className="text-slate-200 truncate">{label.highlightTrack}</span>
                </div>
                <Disc3 className="w-4 h-4 text-[#7f00ff] shrink-0 group-hover:rotate-180 transition-transform duration-700" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Featured Discography Strip */}
      <div className="p-8 bg-[#090a16]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="font-orbitron text-xl font-bold text-white flex items-center gap-2">
              <Music2 className="w-5 h-5 text-[#00f2fe]" />
              KEY CLUB RELEASES
            </h3>
            <p className="font-rajdhani text-sm text-slate-400">
              Essential progressive house and melodic techno compositions charted on Beatport & Spotify
            </p>
          </div>
          <a
            href="https://www.beatport.com/artist/noise-generation/1104954"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#00f2fe] text-xs font-mono text-[#00f2fe] rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-center"
          >
            <span>VIEW ALL ON BEATPORT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGHLIGHT_RELEASES.map((track) => (
            <div
              key={track.title}
              className="p-4 bg-[#05060b] border border-slate-800/80 hover:border-slate-700 rounded-xl flex items-center justify-between gap-3 group transition-colors"
            >
              <div className="min-w-0">
                <span className="font-orbitron text-sm font-bold text-white group-hover:text-[#00f2fe] transition-colors truncate block">
                  {track.title}
                </span>
                <span className="text-xs font-rajdhani text-slate-400 block">
                  {track.label} · {track.type}
                </span>
                <span className="text-[10px] font-mono text-[#ec4899] block mt-0.5">
                  {track.bpm} BPM · {track.key} · {track.duration}
                </span>
              </div>

              <a
                href="https://www.beatport.com/artist/noise-generation/1104954"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 group-hover:bg-[#00f2fe] text-slate-400 group-hover:text-black rounded-lg transition-all shrink-0"
                title="Listen on Beatport"
              >
                <Play className="w-4 h-4 fill-current" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
