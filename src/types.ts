export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
}

export interface ShowcaseProject {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  scope: string;
  details: string[];
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  number: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  stars: number;
}

export interface ContactState {
  fullName: string;
  companyEmail: string;
  projectScope: string;
  phone?: string;
  companyName?: string;
}
