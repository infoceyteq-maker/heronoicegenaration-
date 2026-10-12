import React, { useState } from 'react';
import { Mail, Copy, Check, Send, AlertCircle, Sparkles } from 'lucide-react';
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
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ARTIST_DATA.bookingEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in all required fields (Name, Email, Details).');
      return;
    }

    const subject = `Booking Inquiry: ${formData.eventType} - ${formData.name}`;
    const body = `Promoter / Venue: ${formData.name}\nContact Email: ${formData.email}\nEngagement Type: ${formData.eventType}\nTarget Date: ${formData.date || 'TBD'}\nLocation: ${formData.location || 'TBD'}\n\nEvent Details & Scope:\n${formData.message}\n\n---\nSent via noisegeneration.com`;

    const mailtoUrl = `mailto:${ARTIST_DATA.bookingEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatusMessage(
      `Opening your default email application... If your mail client does not open automatically, please send your email directly to ${ARTIST_DATA.bookingEmail}.`
    );

    // Open prefilled email
    window.location.href = mailtoUrl;
  };

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
          <span>04</span>
          <span aria-hidden="true">·</span>
          <span>MANAGEMENT & RESERVATIONS</span>
        </div>
        <h2 className="font-orbitron text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          WORLDWIDE BOOKING INQUIRIES
        </h2>
        <p className="font-rajdhani text-lg sm:text-xl text-slate-300 font-medium max-w-2xl">
          Available for international festivals, underground club dates, guest podcasts, and official remix commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Card & Technical Rider */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-[#0a0b10]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl space-y-6">
            <h3 className="font-orbitron text-xl font-bold text-white flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-amber-400" />
              DIRECT MANAGEMENT
            </h3>

            <p className="font-rajdhani text-slate-300 text-base leading-relaxed">
              For worldwide touring, performance inquiries, and sync licensing, contact management directly via email.
            </p>

            {/* Email Copy Card */}
            <div className="p-4 bg-black/60 rounded-xl border border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0 font-mono text-xs text-slate-300 truncate">
                <span className="text-[10px] text-slate-500 block uppercase font-bold">OFFICIAL BOOKING EMAIL</span>
                <span className="text-amber-400 font-bold truncate block">{ARTIST_DATA.bookingEmail}</span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg transition-all shrink-0 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy booking email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Rider Requirements */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h4 className="font-orbitron text-xs font-bold text-slate-200 tracking-wider uppercase">
                Standard Technical Rider
              </h4>
              <ul className="space-y-2 text-xs font-rajdhani text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  2x or 3x Pioneer CDJ-3000 (or CDJ-2000NXS2) linked via Pro DJ Link
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  1x Pioneer DJM-900NXS2 (or DJM-V10 / Allen & Heath Xone:96)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
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
            className="p-8 sm:p-10 bg-[#0a0b10]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl space-y-6"
          >
            {statusMessage && (
              <div
                className="p-4 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-rajdhani flex items-start gap-3"
                role="status"
              >
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">{statusMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="booking-name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Promoter / Organization Name *
                </label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  placeholder="e.g. Club Amnesia / Electric Festival"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Contact Email *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="promoter@venue.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="booking-type" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Engagement Type
                </label>
                <select
                  id="booking-type"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Club Show">Club Headline Set</option>
                  <option value="Festival">Festival Stage</option>
                  <option value="Podcast Mix">Guest Mix / Podcast</option>
                  <option value="Remix Project">Official Remix</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-date" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Target Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="booking-location" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  City / Country
                </label>
                <input
                  id="booking-location"
                  type="text"
                  placeholder="e.g. Amsterdam, NL"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                Event Details & Scope *
              </label>
              <textarea
                id="booking-message"
                required
                rows={4}
                placeholder="Venue capacity, set duration, flight and accommodation routing, additional lineup..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/60 border border-white/15 focus:border-amber-400 rounded-xl text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs font-rajdhani text-slate-400">
                Notice: Clicking &lsquo;Dispatch Inquiry&rsquo; will open your email application with this request.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-200 text-black font-orbitron font-bold text-xs tracking-widest uppercase rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
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
