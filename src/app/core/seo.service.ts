import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  set(data: SeoData): void {
    const fullTitle = data.title.includes('QuantsMind') ? data.title : `${data.title} | QuantsMind`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: data.description.slice(0, 160) });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description.slice(0, 160) });
    if (data.ogImage) this.meta.updateTag({ property: 'og:image', content: data.ogImage });
    if (data.canonical) {
      this.meta.updateTag({ property: 'og:url', content: data.canonical });
      this.ensureCanonical(data.canonical);
    }
    if (data.ogType) this.meta.updateTag({ property: 'og:type', content: data.ogType });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.ensureJsonLd();
  }

  private ensureCanonical(href: string): void {
    if (typeof document === 'undefined') return;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = href;
  }

  private ensureJsonLd(): void {
    if (typeof document === 'undefined') return;
    if (document.getElementById('jsonld-org')) return;
    const script = document.createElement('script');
    script.id = 'jsonld-org';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'QuantsMind',
      url: 'https://quantsmind.com',
      logo: 'https://quantsmind.com/favicon.ico',
      sameAs: ['https://github.com/ajit-ai'],
    });
    document.head.appendChild(script);
  }
}
