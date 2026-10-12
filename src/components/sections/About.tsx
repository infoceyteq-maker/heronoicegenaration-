import React from 'react';
import { Clock, Disc3, Award, Sparkles, MapPin, Waves, Music } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

export default function About() {
  const milestones = [
    {
      year: '1991',
      title: 'Roots in Polonnaruwa',
      desc: 'Born in the ancient Sri Lankan kingdom of Polonnaruwa, drawing early inspiration from cultural resonance and atmospheric natural acoustics.',
      icon: MapPin,
      accent: '#00f2fe',
    },
    {
      year: '2008',
      title: 'Acid Music & Sound Design',
      desc: 'Discovered Acid Music and hardware sequencers, initiating hundreds of studio hours dedicated to analog bass engineering and synthesis.',
      icon: Waves,
      accent: '#7f00ff',
    },
    {
      year: '2015',
      title: 'International Debut',
      desc: 'First official international club release, securing attention from European Progressive House luminaries and global underground radio shows.',
      icon: Disc3,
      accent: '#ec4899',
    },
    {
      year: '2024',
      title: 'Noise in Harmony Records',
      desc: 'Founded his own independent record label to foster world-class Melodic Techno & Progressive House producers from Sri Lanka and beyond.',
      icon: Award,
      accent: '#00f2fe',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#7f00ff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe] uppercase tracking-widest">
          <span>01</span>
          <span aria-hidden="true">·</span>
          <span>SONIC CHRONICLES</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          THE STORY BEHIND THE SOUND
        </h2>
        <p className="font-rajdhani text-lg sm:text-xl text-slate-400 font-medium max-w-2xl">
          Crafting progressive tension, hypnotic groove structures, and melodic emotion from Sri Lanka to the world.
        </p>
      </div>

      {/* Two Column Layout: Detailed Bio & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Bio Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 bg-[#07080f]/80 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-[#00f2fe]/40 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00f2fe]/10 to-transparent pointer-events-none" />
            
            <h3 className="font-orbitron text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#00f2fe]" />
              Pradeep Dissanayaka // Noise Generation
            </h3>

            <div className="space-y-4 font-rajdhani text-slate-300 text-lg leading-relaxed font-medium">
              <p>{ARTIST_DATA.bioFull[0]}</p>
              <p>{ARTIST_DATA.bioFull[1]}</p>
              <p>{ARTIST_DATA.bioFull[2]}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800/80 font-mono text-center">
              <div>
                <span className="block text-2xl font-orbitron font-extrabold text-[#00f2fe]">16+</span>
                <span className="text-[11px] text-slate-400 tracking-wider">YEARS CRAFTING</span>
              </div>
              <div>
                <span className="block text-2xl font-orbitron font-extrabold text-[#7f00ff]">9+</span>
                <span className="text-[11px] text-slate-400 tracking-wider">GLOBAL LABELS</span>
              </div>
              <div>
                <span className="block text-2xl font-orbitron font-extrabold text-[#ec4899]">123</span>
                <span className="text-[11px] text-slate-400 tracking-wider">SIGNATURE BPM</span>
              </div>
            </div>
          </div>

          {/* Sound Ethos Quote */}
          <div className="p-6 bg-gradient-to-r from-[#030305] via-[#090a16] to-[#030305] border border-slate-800 rounded-xl flex items-center gap-4">
            <Music className="w-8 h-8 text-[#00f2fe] shrink-0" />
            <blockquote className="font-rajdhani italic text-slate-300 text-base sm:text-lg">
              &ldquo;Noise is not chaos when orchestrated with intention. In every frequency of distortion and deep resonance, there exists an undeniable state of harmony.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Right Column: Interactive Timeline */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="font-orbitron text-sm font-bold text-slate-300 tracking-wider uppercase mb-2">
            Career Milestones
          </h4>

          <div className="relative pl-6 border-l border-slate-800 space-y-8">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#030305] shadow-[0_0_10px_currentColor] transition-transform group-hover:scale-125"
                    style={{ backgroundColor: m.accent, color: m.accent }}
                  />

                  <div className="p-4 bg-[#080912]/70 backdrop-blur-md border border-slate-800/80 rounded-xl group-hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-orbitron font-bold text-xs" style={{ color: m.accent }}>
                        {m.year}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <h5 className="font-orbitron text-sm font-semibold text-white mb-1">{m.title}</h5>
                    <p className="font-rajdhani text-sm text-slate-400 leading-snug">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
