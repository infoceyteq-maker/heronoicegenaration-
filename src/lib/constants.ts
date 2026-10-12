export interface LabelInfo {
  name: string;
  country: string;
  genre: string;
  yearActive: string;
  highlightTrack?: string;
}

export interface StreamingPlatform {
  name: string;
  url: string;
  iconName: 'spotify' | 'beatport' | 'soundcloud' | 'apple' | 'youtube' | 'facebook';
  description: string;
  accentColor: string;
}

export interface TrackRelease {
  title: string;
  label: string;
  year: string;
  type: 'Original Mix' | 'EP' | 'Remix';
  bpm: number;
  key: string;
  duration: string;
  spotifyUri?: string;
  beatportUrl?: string;
}

export const ARTIST_DATA = {
  name: 'NOISE GENERATION',
  realName: 'Pradeep Dissanayaka',
  tagline: 'Harmony in Noise',
  role: 'Progressive House & Melodic Techno DJ / Producer',
  origin: 'Polonnaruwa, Sri Lanka',
  label: 'Noise in Harmony Records',
  recordLabel: 'Noise in Harmony Records',
  recordLabelFounded: 2024,
  email: 'noisegenerationsl@gmail.com',
  bookingEmail: 'noisegenerationsl@gmail.com',
  bio: 'Underground Progressive House & Melodic Techno DJ and producer sculpting immersive hypnotic soundscapes, atmospheric deep basslines, and emotional melodies from Sri Lanka to global underground dancefloors.',
  bioShort:
    'Underground Progressive House & Melodic Techno DJ and producer sculpting immersive hypnotic soundscapes, atmospheric deep basslines, and emotional melodies from Sri Lanka to global underground dancefloors.',
  bioFull: [
    'Born in 1991 in the historic ancient city of Polonnaruwa, Sri Lanka, Pradeep Dissanayaka — known worldwide as Noise Generation — is one of the pivotal pioneers of South Asian underground electronic dance music.',
    'His sonic odyssey began in 2008 experimenting with Acid Music and early hardware trackers. Over years of meticulous sound design, he forged a distinctive auditory signature characterized by rolling analog basslines, lush cinematic pads, and tension-building melodic progressions.',
    'Making his international debut in 2015, Noise Generation rapidly earned praise from the global progressive elite. His productions have found a home on venerated underground labels worldwide, and in 2024 he launched his own imprint — Noise in Harmony Records — dedicated to championing forward-thinking melodic techno and progressive artists across the globe.',
  ],
  links: {
    spotify: 'https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj',
    beatport: 'https://www.beatport.com/artist/noise-generation/1104954',
    soundcloud: 'https://soundcloud.com/noise-generation/sets',
    apple: 'https://music.apple.com/us/artist/noise-generation/878989062',
    youtube: 'https://youtube.com/channel/UCkd321S7hWF_QJ0cUxorQkQ',
    facebook: 'https://web.facebook.com/Noisegenerationworld',
  },
};

export const SIGNED_LABELS: LabelInfo[] = [
  {
    name: 'Univack Records',
    country: 'Spain',
    genre: 'Progressive House',
    yearActive: '2020 - Present',
    highlightTrack: 'Deep Hypnotic Resonance EP',
  },
  {
    name: 'Superordinate Music',
    country: 'United Kingdom',
    genre: 'Melodic Techno',
    yearActive: '2019 - Present',
    highlightTrack: 'Ethereal Awakening',
  },
  {
    name: 'Balkan Connection',
    country: 'Serbia',
    genre: 'Progressive House',
    yearActive: '2018 - Present',
    highlightTrack: 'Singularity (Original Mix)',
  },
  {
    name: 'Soundteller Records',
    country: 'Poland',
    genre: 'Deep Progressive',
    yearActive: '2017 - Present',
    highlightTrack: 'Solitary Voyage',
  },
  {
    name: 'Consapevole Recordings',
    country: 'Italy',
    genre: 'Organic & Melodic',
    yearActive: '2021 - Present',
    highlightTrack: 'Echoes of Ancient Kingdoms',
  },
  {
    name: 'Massive Harmony Records',
    country: 'Argentina',
    genre: 'Progressive House',
    yearActive: '2016 - Present',
    highlightTrack: 'Cosmic Drift EP',
  },
  {
    name: 'SLC-6 Music',
    country: 'United States',
    genre: 'Melodic Electronic',
    yearActive: '2022 - Present',
    highlightTrack: 'Polonnaruwa Horizon',
  },
  {
    name: 'Eat My Hat Music',
    country: 'Israel',
    genre: 'Progressive Club',
    yearActive: '2021 - Present',
    highlightTrack: 'Obsidian Pulse',
  },
  {
    name: 'Freegrant Music',
    country: 'Ukraine',
    genre: 'Melodic House & Techno',
    yearActive: '2020 - Present',
    highlightTrack: 'Celestial Sphere',
  },
];

export const STREAMING_PLATFORMS: StreamingPlatform[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/5R2QuGLVJ8Nkx05UIDDKIj',
    iconName: 'spotify',
    description: 'Stream full discography, official mixes & curated monthly selects',
    accentColor: '#1DB954',
  },
  {
    name: 'Beatport',
    url: 'https://www.beatport.com/artist/noise-generation/1104954',
    iconName: 'beatport',
    description: 'High-res lossless DJ releases, chartings & exclusive club cuts',
    accentColor: '#00f2fe',
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/noise-generation/sets',
    iconName: 'soundcloud',
    description: 'Underground podcasts, unreleased IDs, live recordings & guest mixes',
    accentColor: '#ff5500',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/noise-generation/878989062',
    iconName: 'apple',
    description: 'Lossless Spatial Audio remasters & Apple Music curated catalogs',
    accentColor: '#fc3c44',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/channel/UCkd321S7hWF_QJ0cUxorQkQ',
    iconName: 'youtube',
    description: 'Visualizer releases, festival sets & studio production sessions',
    accentColor: '#ff0000',
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/Noisegenerationworld',
    iconName: 'facebook',
    description: 'Tour updates, official label announcements & backstage dispatch',
    accentColor: '#1877f2',
  },
];

export const HIGHLIGHT_RELEASES: TrackRelease[] = [
  {
    title: 'Singularity',
    label: 'Balkan Connection',
    year: '2023',
    type: 'Original Mix',
    bpm: 123,
    key: 'F min',
    duration: '7:42',
  },
  {
    title: 'Solitary Voyage',
    label: 'Soundteller Records',
    year: '2022',
    type: 'EP',
    bpm: 122,
    key: 'A min',
    duration: '8:15',
  },
  {
    title: 'Polonnaruwa Dawn',
    label: 'Noise in Harmony Records',
    year: '2024',
    type: 'Original Mix',
    bpm: 124,
    key: 'D min',
    duration: '7:18',
  },
  {
    title: 'Ethereal Awakening',
    label: 'Superordinate Music',
    year: '2023',
    type: 'Remix',
    bpm: 123,
    key: 'G min',
    duration: '7:55',
  },
  {
    title: 'Cosmic Drift',
    label: 'Massive Harmony Records',
    year: '2021',
    type: 'EP',
    bpm: 121,
    key: 'E min',
    duration: '8:04',
  },
  {
    title: 'Celestial Sphere',
    label: 'Freegrant Music',
    year: '2024',
    type: 'Original Mix',
    bpm: 125,
    key: 'C min',
    duration: '6:54',
  },
];
