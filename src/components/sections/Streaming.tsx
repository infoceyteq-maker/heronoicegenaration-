import React, { useState } from 'react';
import { Radio, Disc, Music, Youtube, Facebook, ExternalLink, ArrowUpRight } from 'lucide-react';
import { STREAMING_PLATFORMS, StreamingPlatform } from '@/lib/constants';

function TiltCard({ platform }: { platform: StreamingPlatform }) {
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  };

  const renderIcon = () => {
    switch (platform.iconName) {
      case 'spotify':
        return <Radio className="w-8 h-8 text-[#1DB954]" />;
      case 'beatport':
        return <Disc className="w-8 h-8 text-[#00f2fe]" />;
      case 'soundcloud':
        return <Music className="w-8 h-8 text-[#ff5500]" />;
      case 'apple':
        return <Music className="w-8 h-8 text-[#fc3c44]" />;
      case 'youtube':
        return <Youtube className="w-8 h-8 text-[#ff0000]" />;
      case 'facebook':
        return <Facebook className="w-8 h-8 text-[#1877f2]" />;
      default:
        return <Music className="w-8 h-8 text-white" />;
    }
  };

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
      }}
      className="block p-7 bg-[#07080f]/90 backdrop-blur-xl border border-slate-800/90 hover:border-slate-600 rounded-2xl relative overflow-hidden group shadow-2xl cursor-pointer"
    >
      {/* Glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
        style={{ backgroundColor: platform.accentColor }}
      />

      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform">
          {renderIcon()}
        </div>
        <div className="p-2 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 group-hover:text-white group-hover:border-slate-700 transition-colors">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-[#00f2fe] transition-colors mb-2">
        {platform.name}
      </h3>

      <p className="font-rajdhani text-sm text-slate-400 font-medium leading-relaxed">
        {platform.description}
      </p>

      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-500 uppercase tracking-wider">OFFICIAL PROFILE</span>
        <span className="text-slate-300 group-hover:text-[#00f2fe] transition-colors flex items-center gap-1">
          OPEN STREAM <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  );
}

export default function Streaming() {
  return (
    <section id="streaming" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ec4899] uppercase tracking-widest">
          <span>03</span>
          <span aria-hidden="true">·</span>
          <span>STREAMING ECOSYSTEM</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          CONNECT & STREAM MUSIC
        </h2>
        <p className="font-rajdhani text-lg sm:text-xl text-slate-400 font-medium">
          Experience full uncompressed catalogs, live DJ sessions, and exclusive underground podcasts across all major streaming channels.
        </p>
      </div>

      {/* 6 Platform Cards with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STREAMING_PLATFORMS.map((platform) => (
          <TiltCard key={platform.name} platform={platform} />
        ))}
      </div>
    </section>
  );
}
