import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  // SOLUTIONS
  { path: 'solutions/ai-engineering', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'AI Engineering', badge: 'ENGINEERING', desc: 'Production AI systems — training, eval, guardrails and deployment at scale. Deep-dive page in development.', seoTitle: 'AI Engineering | QuantsMind', seoDesc: 'Production AI engineering — training, evaluation and deployment.' } },
  { path: 'solutions/data-intelligence', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Data Intelligence', badge: 'ENGINEERING', desc: 'Turn raw data into knowledge with lakehouse, streaming and semantic layers. Detailed case studies coming soon.', seoTitle: 'Data Intelligence | QuantsMind' } },
  { path: 'solutions/enterprise-engineering', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Enterprise Engineering', badge: 'ENGINEERING' } },
  { path: 'solutions/technology-transformation', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Technology Transformation', badge: 'ENGINEERING' } },
  // PRODUCTS
  { path: 'products/financial-intelligence', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Financial Intelligence', badge: 'BETA · INTELLIGENCE' } },
  { path: 'products/enterprise-ai', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Enterprise AI', badge: 'IN DEVELOPMENT' } },
  { path: 'products/future-products', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Future Products', badge: 'RESEARCH' } },
  // LABS
  { path: 'labs/artificial-intelligence', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Labs — Artificial Intelligence', badge: 'RESEARCH' } },
  { path: 'labs/quantum-computing', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Labs — Quantum Computing', badge: 'EXPERIMENTAL' } },
  { path: 'labs/computational-systems', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Labs — Computational Systems', badge: 'RESEARCH' } },
  { path: 'labs/programming-languages', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Labs — Programming Languages', badge: 'RESEARCH' } },
  { path: 'labs/experimental-projects', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Labs — Experimental Projects', badge: 'EXPERIMENTAL' } },
  // DEVELOPERS
  { path: 'developers/open-source', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Open Source', badge: 'OPEN SOURCE', desc: 'QuantsMind SDK, Karkain, Quantum SDK — our open work lives on GitHub.' } },
  { path: 'developers/sdk', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'SDK', badge: 'DEVELOPERS' } },
  { path: 'developers/documentation', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Documentation', badge: 'DEVELOPERS' } },
  // INSIGHTS
  { path: 'insights/engineering', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Insights — Engineering', badge: 'INSIGHTS' } },
  { path: 'insights/artificial-intelligence', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Insights — AI', badge: 'INSIGHTS' } },
  { path: 'insights/data', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Insights — Data', badge: 'INSIGHTS' } },
  { path: 'insights/quantum', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Insights — Quantum', badge: 'INSIGHTS' } },
  { path: 'insights/research', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Insights — Research', badge: 'INSIGHTS' } },
  // COMPANY
  { path: 'company/about', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'About QuantsMind', badge: 'COMPANY', desc: 'A technology engineering, intelligence and research organization. Full story — team, principles, and focus — coming soon.' } },
  { path: 'company/vision', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Vision', badge: 'COMPANY' } },
  { path: 'company/contact', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Contact', badge: 'LET’S TALK', desc: 'We partner where engineering matters. Reach us at hello@quantsmind.com — real humans reply.' } },
  { path: '**', loadComponent: () => import('./shared/components/coming-soon').then(m => m.ComingSoon), data: { title: 'Page not found', badge: '404' } },
];
