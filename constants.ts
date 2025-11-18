import { GearItem, Project, Service, NavItem } from './types';
import { Sliders, Music, Mic2, Scissors } from 'lucide-react';

export const PRODUCER_NAME = "Alex Waves";
export const TAGLINE = "Sculpting Sound. Defining Emotion.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Gear', href: '#gear' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nights',
    artist: 'The Midnight Echo',
    role: 'Producer & Mix',
    year: '2023',
    genre: 'Synthwave',
    imageUrl: 'https://picsum.photos/600/600?random=1'
  },
  {
    id: '2',
    title: 'Acoustic Sessions',
    artist: 'Sarah Jenkins',
    role: 'Recording & Mix',
    year: '2024',
    genre: 'Folk / Acoustic',
    imageUrl: 'https://picsum.photos/600/600?random=2'
  },
  {
    id: '3',
    title: 'Heavy Impact',
    artist: 'Iron Giants',
    role: 'Mixing Engineer',
    year: '2022',
    genre: 'Metalcore',
    imageUrl: 'https://picsum.photos/600/600?random=3'
  },
  {
    id: '4',
    title: 'Lo-Fi Dreams',
    artist: 'Cloud Walker',
    role: 'Mastering',
    year: '2024',
    genre: 'Lo-Fi Hip Hop',
    imageUrl: 'https://picsum.photos/600/600?random=4'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'mix',
    title: 'Mixing',
    description: 'Balance, clarity, and depth. I take your raw multi-tracks and turn them into a professional, radio-ready stereo file.',
    priceRange: 'From $200/track',
    icon: 'mix'
  },
  {
    id: 'produce',
    title: 'Full Production',
    description: 'From demo to final master. I help with arrangement, sound design, recording, and creative direction.',
    priceRange: 'Contact for quote',
    icon: 'produce'
  },
  {
    id: 'master',
    title: 'Mastering',
    description: 'The final polish. Ensuring your track translates perfectly across all playback systems and streaming platforms.',
    priceRange: 'From $50/track',
    icon: 'master'
  },
  {
    id: 'edit',
    title: 'Editing & Tuning',
    description: 'Vocal tuning (Melodyne/Auto-Tune), drum quantization, and noise reduction.',
    priceRange: 'Hourly Rate',
    icon: 'edit'
  }
];

export const GEAR_LIST: GearItem[] = [
  {
    category: "Monitoring",
    items: ["Focal Shape 65", "Yamaha NS-10M", "Sennheiser HD650", "Sonarworks Reference"]
  },
  {
    category: "Outboard",
    items: ["Universal Audio 1176LN", "Warm Audio WA-2A", "Neve 1073 Preamp", "SSL Bus Compressor Clone"]
  },
  {
    category: "Software / DAW",
    items: ["Pro Tools Ultimate", "Ableton Live 11", "FabFilter Bundle", "Soundtoys 5", "UAD Spark"]
  },
  {
    category: "Microphones",
    items: ["Neumann U87 Ai", "Shure SM7B", "AKG C414 XLII", "Royer R-121"]
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  spotify: "https://spotify.com",
  email: "contact@alexwavesaudio.com"
};
