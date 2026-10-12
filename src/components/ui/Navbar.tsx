import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Disc3 } from 'lucide-react';
import { technoAudio } from '@/utils/technoAudio';

interface NavbarProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Navbar({ isPlayingAudio, onToggleAudio }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Discography', href: '#labels' },
    { label: 'Imprint', href: '#record-label' },
    { label: 'Music', href: '#streaming' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030305]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Strict 1-line display face element) */}
        <a
          href="#"
          className="font-orbitron font-extrabold text-base sm:text-lg tracking-[0.2em] text-white hover:text-[#00f2fe] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 bg-gradient-to-tr from-[#00f2fe] to-[#7f00ff] rounded-xs rotate-45 group-hover:scale-125 transition-transform shadow-[0_0_10px_#00f2fe]" />
          <span>NOISE GENERATION</span>
        </a>

        {/* Zone 2: 4-5 Concise Single-line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-rajdhani font-semibold tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00f2fe] transition-colors whitespace-nowrap shrink-0 uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00f2fe] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Audio Visualizer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Audio Synthesizer Trigger Button */}
          <button
            onClick={onToggleAudio}
            className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-medium tracking-wider flex items-center gap-2 transition-all ${
              isPlayingAudio
                ? 'bg-[#00f2fe]/10 border-[#00f2fe] text-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
            title={isPlayingAudio ? 'Mute 123 BPM Progressive Engine' : 'Trigger 123 BPM Progressive Techno Engine'}
            aria-label="Toggle progressive techno audio"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#00f2fe] animate-pulse" />
                <span className="hidden sm:inline">123 BPM</span>
                <span className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-[#00f2fe] animate-pulse" />
                  <span className="w-0.5 h-3 bg-[#7f00ff] animate-ping" />
                  <span className="w-0.5 h-1.5 bg-[#00f2fe] animate-pulse" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#booking"
            className="hidden sm:inline-flex px-4 py-1.5 text-xs font-orbitron font-bold text-black bg-[#00f2fe] hover:bg-white hover:shadow-[0_0_20px_#00f2fe] rounded-lg transition-all tracking-wider whitespace-nowrap shrink-0"
          >
            BOOK ARTIST
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030305]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3 font-rajdhani text-base font-semibold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-[#00f2fe] py-2 border-b border-slate-900 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-orbitron font-bold text-black bg-[#00f2fe] rounded-lg"
            >
              BOOK NOISE GENERATION
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
