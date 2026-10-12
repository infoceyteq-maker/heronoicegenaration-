import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

interface NavbarProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Navbar({ isPlayingAudio, onToggleAudio }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Labels', href: '#labels' },
    { label: 'Record Label', href: '#record-label' },
    { label: 'Streaming', href: '#streaming' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050508]/92 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Brand Wordmark & Label Tag */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          aria-label="Noise Generation Home"
        >
          <span className="font-orbitron font-black text-lg sm:text-xl tracking-[0.2em] text-white group-hover:text-amber-400 transition-colors uppercase whitespace-nowrap">
            {ARTIST_DATA.name}
          </span>
          <span className="font-mono text-[10px] text-slate-400 tracking-[0.25em] uppercase font-semibold">
            {ARTIST_DATA.label}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs font-mono font-bold tracking-[0.18em] text-slate-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors uppercase relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Audio Engine Trigger & Booking CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Audio Synthesizer Toggle */}
          <button
            type="button"
            onClick={onToggleAudio}
            className={`px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-wider flex items-center gap-2 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
              isPlayingAudio
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                : 'bg-black/60 border-white/20 text-slate-300 hover:text-white hover:border-white/50'
            }`}
            title={isPlayingAudio ? 'Pause 123 BPM Progressive House' : 'Play 123 BPM Progressive House'}
            aria-label={isPlayingAudio ? 'Pause 123 BPM progressive techno audio' : 'Play 123 BPM progressive techno audio'}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">123 BPM ACTIVE</span>
                <span className="flex items-center gap-0.5 h-3" aria-hidden="true">
                  <span className="w-0.5 h-2.5 bg-amber-400 animate-pulse" />
                  <span className="w-0.5 h-3.5 bg-amber-300 animate-bounce" />
                  <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SOUND: OFF</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#booking"
            className="hidden sm:inline-flex px-5 py-2 text-xs font-mono font-bold text-black bg-white hover:bg-slate-200 rounded-full transition-all uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            BOOK ARTIST
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#07070c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col gap-2 font-mono text-sm font-semibold tracking-wider" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-amber-400 py-2.5 border-b border-white/5 uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-mono font-bold text-black bg-white rounded-full uppercase tracking-wider shadow-md"
            >
              BOOK NOISE GENERATION
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
