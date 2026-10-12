import React from 'react';
import { Disc3, Send, Sparkles, Compass, ShieldCheck, Flame } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

export default function RecordLabel() {
  return (
    <section id="record-label" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-[#7f00ff]/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Glassmorphism Feature Card */}
      <div className="relative p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0c0d1c]/90 via-[#06070e]/95 to-[#0b0c18]/90 backdrop-blur-2xl border border-slate-700/80 hover:border-[#00f2fe]/60 rounded-3xl shadow-[0_0_50px_rgba(127,0,255,0.2)] overflow-hidden transition-all duration-500">
        {/* Decorative corner glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00f2fe]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#ec4899]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Label Story & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#00f2fe] uppercase bg-[#00f2fe]/10 border border-[#00f2fe]/30 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>OFFICIAL IMPRINT // FOUNDED 2024</span>
            </div>

            <h2 className="font-orbitron text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              NOISE IN HARMONY <br />
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#7f00ff] to-[#ec4899] bg-clip-text text-transparent">
                RECORDS
              </span>
            </h2>

            <p className="font-rajdhani text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
              Founded in 2024 by Noise Generation, <strong className="text-white">Noise in Harmony Records</strong> was created with a singular mandate: to provide an uncompromising global stage for underground Progressive House and Melodic Techno producers from South Asia and the international underground.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-white font-orbitron text-sm font-bold">
                  <Compass className="w-4 h-4 text-[#00f2fe]" />
                  Curated Underground Sound
                </div>
                <p className="font-rajdhani text-sm text-slate-400">
                  Focused on deep harmonic grooves, intricate melodic layering, and club-ready progressive arrangements.
                </p>
              </div>

              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-white font-orbitron text-sm font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#ec4899]" />
                  Global Distribution
                </div>
                <p className="font-rajdhani text-sm text-slate-400">
                  Full worldwide delivery across Beatport, Spotify, Apple Music, Traxsource, and underground promo pools.
                </p>
              </div>
            </div>

            {/* Demo Submission Box */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${ARTIST_DATA.bookingEmail}?subject=Demo%20Submission%20-%20Noise%20in%20Harmony%20Records`}
                className="px-6 py-3.5 bg-gradient-to-r from-[#7f00ff] to-[#ec4899] hover:from-[#00f2fe] hover:to-[#7f00ff] text-white font-orbitron font-bold text-xs tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(127,0,255,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT DEMO TRACK</span>
              </a>

              <span className="font-mono text-xs text-slate-400">
                Accepting private SoundCloud links at{' '}
                <span className="text-slate-200">{ARTIST_DATA.bookingEmail}</span>
              </span>
            </div>
          </div>

          {/* Right: Vinyl / Label Emblem Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Outer rotating neon ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#00f2fe]/40 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-slate-800" />
              <div className="absolute inset-8 rounded-full border border-[#7f00ff]/50 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Center Vinyl Centerpiece */}
              <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-[#05060b] via-[#101322] to-[#05060b] border-2 border-[#00f2fe] flex flex-col items-center justify-center p-4 shadow-[0_0_35px_rgba(0,242,254,0.35)] relative group cursor-pointer">
                <Disc3 className="w-12 h-12 text-[#00f2fe] animate-[spin_6s_linear_infinite]" />
                <span className="font-orbitron text-[11px] font-black text-white tracking-widest mt-2">
                  NOISE IN HARMONY
                </span>
                <span className="font-mono text-[9px] text-[#ec4899] tracking-widest uppercase">
                  SRI LANKA
                </span>
              </div>
            </div>

            <p className="font-mono text-xs text-slate-400 mt-4 tracking-wider">
              CATALOG CODE: <span className="text-[#00f2fe]">NIH-001+</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
