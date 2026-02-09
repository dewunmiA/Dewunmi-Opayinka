export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: 'camera' | 'code' | 'layers' | 'users' | 'globe' | 'leaf';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: 'map' | 'phone' | 'mail' | 'users' | 'socials';
}
