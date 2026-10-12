import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Calendar, Disc, MapPin, Radio } from 'lucide-react';
import { ARTIST_DATA } from '@/lib/constants';

export default function Booking() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Club Show',
    date: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ARTIST_DATA.bookingEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${ARTIST_DATA.bookingEmail}?subject=${encodeURIComponent(
      `Booking Inquiry: ${formData.eventType} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.email}\nEvent Type: ${formData.eventType}\nTarget Date: ${formData.date}\nLocation: ${formData.location}\n\nDetails:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#00f2fe] uppercase tracking-widest">
          <span>04</span>
          <span aria-hidden="true">·</span>
          <span>MANAGEMENT & RESERVATIONS</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          WORLDWIDE BOOKING INQUIRIES
        </h2>
        <p className="font-rajdhani text-lg sm:text-xl text-slate-400 font-medium max-w-2xl">
          Available for international festivals, underground club dates, guest podcasts, and official remix commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Card & Technical Rider */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-[#07080f]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-2xl space-y-6">
            <h3 className="font-orbitron text-xl font-bold text-white flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-[#00f2fe]" />
              DIRECT MANAGEMENT
            </h3>

            <p className="font-rajdhani text-slate-300 text-base leading-relaxed">
              For worldwide touring, performance inquiries, and sync licensing, contact management directly via email.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
              <div className="min-w-0 font-mono text-xs text-slate-300 truncate">
                <span className="text-[10px] text-slate-500 block">OFFICIAL BOOKING EMAIL</span>
                <span className="text-[#00f2fe] font-semibold truncate block">{ARTIST_DATA.bookingEmail}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 bg-slate-900 hover:bg-[#00f2fe] text-slate-300 hover:text-black rounded-lg transition-all shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy booking email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Rider Requirements */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <h4 className="font-orbitron text-xs font-bold text-slate-300 tracking-wider uppercase">
                Standard Technical Rider
              </h4>
              <ul className="space-y-2 text-xs font-rajdhani text-slate-400 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" />
                  2x or 3x Pioneer CDJ-3000 (or CDJ-2000NXS2) linked via Pro DJ Link
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7f00ff]" />
                  1x Pioneer DJM-900NXS2 (or DJM-V10 / Allen & Heath Xone:96)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" />
                  High-fidelity stereo booth monitors with independent volume control
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 bg-[#07080f]/90 backdrop-blur-xl border border-slate-800/90 rounded-2xl shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Promoter / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Movement Festivals / Club Eden"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="promoter@venue.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Engagement Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 focus:outline-none transition-colors"
                >
                  <option value="Club Show">Club Headline Set</option>
                  <option value="Festival">Festival Stage</option>
                  <option value="Podcast Mix">Guest Mix / Podcast</option>
                  <option value="Remix Project">Official Remix</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  Target Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  City / Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Amsterdam, NL"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                Event Details & Scope *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Venue capacity, set duration, flight and accommodation routing, additional lineup..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 focus:border-[#00f2fe] rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs font-rajdhani text-slate-400">
                Responses delivered within 24-48 business hours.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#00f2fe] hover:bg-white text-black font-orbitron font-bold text-xs tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(0,242,254,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH INQUIRY</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
