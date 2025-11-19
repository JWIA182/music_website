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

export interface NavItem {
  label: string;
  href: string;
}
