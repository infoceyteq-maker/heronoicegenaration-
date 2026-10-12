import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Noise Generation | Progressive House & Melodic Techno DJ/Producer',
  description:
    'Official portfolio of Noise Generation (Pradeep Dissanayaka) — Underground Sri Lankan Progressive House & Melodic Techno DJ, producer, and founder of Noise in Harmony Records.',
  keywords: [
    'Noise Generation',
    'Pradeep Dissanayaka',
    'Progressive House',
    'Melodic Techno',
    'Sri Lanka DJ',
    'Noise in Harmony Records',
    'Univack Records',
    'Balkan Connection',
    'Beatport',
    'Spotify',
  ],
  openGraph: {
    title: 'Noise Generation | Progressive House & Melodic Techno',
    description: 'Underground electronic music from Sri Lanka. Founder of Noise in Harmony Records.',
    url: 'https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj',
    siteName: 'Noise Generation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noise Generation | Official Artist Portfolio',
    description: 'Underground Progressive House & Melodic Techno producer from Sri Lanka.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030305] text-slate-100 font-sans antialiased selection:bg-[#00f2fe] selection:text-black">
        {children}
      </body>
    </html>
  );
}
