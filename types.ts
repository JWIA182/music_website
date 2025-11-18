export interface Project {
  id: string;
  title: string;
  artist: string;
  role: string;
  year: string;
  imageUrl: string;
  genre: string;
  streamUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: 'mix' | 'master' | 'produce' | 'edit';
}

export interface GearItem {
  category: string;
  items: string[];
}

export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
}