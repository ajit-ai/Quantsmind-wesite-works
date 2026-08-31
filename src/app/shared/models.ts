export type Pillar = 'engineering' | 'intelligence' | 'labs';
export type ProductStatus = 'available' | 'beta' | 'in-development' | 'research' | 'experimental' | 'open-source' | 'archived';

export interface Capability {
  id: string;
  title: string;
  description: string;
  pillar: Pillar;
  icon: string;
  status?: ProductStatus;
  link: string;
}

export interface Solution {
  id: string;
  title: string;
  problem: string;
  approach: string;
  outcomes: string[];
  pillar: Pillar;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  status: ProductStatus;
  features: string[];
  visualRef?: string;
  pillar: Pillar;
  link: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  domain: string;
  status: ProductStatus;
  summary: string;
  links: { label: string; href: string }[];
  pillar: Pillar;
}

export interface Technology {
  id: string;
  name: string;
  category: 'ai' | 'data' | 'software' | 'cloud' | 'systems';
  relevance: string;
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageRef: string;
  link: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  challenge: string;
  outcome: string;
  isPublic: boolean;
  pillar: Pillar;
}
