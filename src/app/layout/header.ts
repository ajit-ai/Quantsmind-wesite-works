import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'qm-header',
  imports: [RouterLink],
  template: `
  <a class="qm-skip-link" href="#main">Skip to main content</a>
  <header class="qm-header" [class.qm-header--scrolled]="scrolled()" [class.qm-header--open]="open()" role="banner">
    <div class="qm-container qm-header__inner">
      <a routerLink="/" class="qm-header__logo" aria-label="QuantsMind home">
        <span class="qm-header__mark" aria-hidden="true">◈</span>
        <span class="qm-header__word">QuantsMind</span>
      </a>

      <nav class="qm-header__nav" role="navigation" aria-label="Primary">
        <div class="qm-header__links">
          <div class="qm-header__item" (mouseenter)="active.set('solutions')" (mouseleave)="active.set(null)">
            <a routerLink="/solutions/ai-engineering" class="qm-header__link" aria-haspopup="true" [attr.aria-expanded]="active() === 'solutions'">Solutions</a>
            @if (active() === 'solutions') {
              <div class="qm-header__mega" role="menu">
                <a routerLink="/solutions/ai-engineering" role="menuitem">AI Engineering</a>
                <a routerLink="/solutions/data-intelligence" role="menuitem">Data Intelligence</a>
                <a routerLink="/solutions/enterprise-engineering" role="menuitem">Enterprise Engineering</a>
                <a routerLink="/solutions/technology-transformation" role="menuitem">Technology Transformation</a>
              </div>
            }
          </div>
          <div class="qm-header__item" (mouseenter)="active.set('products')" (mouseleave)="active.set(null)">
            <a routerLink="/products/financial-intelligence" class="qm-header__link" aria-haspopup="true" [attr.aria-expanded]="active() === 'products'">Products</a>
            @if (active() === 'products') {
              <div class="qm-header__mega" role="menu">
                <a routerLink="/products/financial-intelligence" role="menuitem">Financial Intelligence</a>
                <a routerLink="/products/enterprise-ai" role="menuitem">Enterprise AI</a>
                <a routerLink="/products/future-products" role="menuitem">Future Products</a>
              </div>
            }
          </div>
          <div class="qm-header__item" (mouseenter)="active.set('labs')" (mouseleave)="active.set(null)">
            <a routerLink="/labs/artificial-intelligence" class="qm-header__link" aria-haspopup="true" [attr.aria-expanded]="active() === 'labs'">Labs</a>
            @if (active() === 'labs') {
              <div class="qm-header__mega" role="menu">
                <a routerLink="/labs/artificial-intelligence" role="menuitem">Artificial Intelligence</a>
                <a routerLink="/labs/quantum-computing" role="menuitem">Quantum Computing</a>
                <a routerLink="/labs/computational-systems" role="menuitem">Computational Systems</a>
                <a routerLink="/labs/programming-languages" role="menuitem">Programming Languages</a>
                <a routerLink="/labs/experimental-projects" role="menuitem">Experimental Projects</a>
              </div>
            }
          </div>
          <a routerLink="/developers/open-source" class="qm-header__link">Developers</a>
          <a routerLink="/insights/engineering" class="qm-header__link">Insights</a>
          <a routerLink="/company/about" class="qm-header__link">Company</a>
        </div>
      </nav>

      <div class="qm-header__actions">
        <a routerLink="/company/contact" class="qm-btn qm-btn--primary">Let's Talk →</a>
        <button class="qm-header__burger" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-controls="qm-mobile-menu" aria-label="Toggle menu">
          <span class="qm-burger__line"></span><span class="qm-burger__line"></span><span class="qm-burger__line"></span>
        </button>
      </div>
    </div>

    <!-- mobile -->
    <div id="qm-mobile-menu" class="qm-mobile" [class.qm-mobile--open]="open()" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <button class="qm-mobile__close" (click)="open.set(false)" aria-label="Close menu">✕</button>
      <nav class="qm-mobile__nav">
        <a routerLink="/solutions/ai-engineering" (click)="open.set(false)">Solutions</a>
        <a routerLink="/products/financial-intelligence" (click)="open.set(false)">Products</a>
        <a routerLink="/labs/artificial-intelligence" (click)="open.set(false)">Labs</a>
        <a routerLink="/developers/open-source" (click)="open.set(false)">Developers</a>
        <a routerLink="/insights/engineering" (click)="open.set(false)">Insights</a>
        <a routerLink="/company/about" (click)="open.set(false)">Company</a>
        <a routerLink="/company/contact" class="qm-btn qm-btn--primary" (click)="open.set(false)">Let's Talk →</a>
      </nav>
    </div>
    @if (open()) { <div class="qm-mobile__backdrop" (click)="open.set(false)" aria-hidden="true"></div> }
  </header>
  `,
  styles: `
  .qm-header { position: sticky; top: 0; z-index: 50; background: transparent; border-bottom: 1px solid transparent; transition: background var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out), border-color var(--motion-base) var(--ease-out); }
  .qm-header--scrolled { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-color: var(--color-border-subtle); box-shadow: var(--shadow-sm); }
  .qm-header__inner { display:flex; align-items:center; justify-content:space-between; gap: var(--space-4); min-height: 64px; }
  .qm-header__logo { display:flex; align-items:center; gap: 10px; font-family: var(--font-display); font-weight: 800; letter-spacing: var(--tracking-tight); font-size: 18px; }
  .qm-header__mark { width:28px; height:28px; display:grid; place-items:center; background: var(--gradient-hero); color:#fff; border-radius: 8px; font-size:14px; }
  .qm-header__nav { display:none; @media(min-width:1024px){ display:block; } }
  .qm-header__links { display:flex; gap: var(--space-5); align-items:center; }
  .qm-header__link { font-size: var(--text-small); font-weight:600; color: var(--color-text-secondary); padding: 8px 4px; position:relative; }
  .qm-header__link:hover, .qm-header__link:focus-visible{ color: var(--color-text-primary); }
  .qm-header__item{ position:relative; }
  .qm-header__mega{ position:absolute; top:100%; left:0; min-width:240px; background:#fff; border:1px solid var(--color-border-subtle); border-radius: var(--radius-md); box-shadow: var(--shadow-lg); padding: var(--space-3); display:flex; flex-direction:column; gap:2px; animation: qmFade .22s var(--ease-out); }
  .qm-header__mega a{ padding: 10px 12px; border-radius: 8px; font-size: 14px; font-weight:500; }
  .qm-header__mega a:hover{ background: var(--color-bg-surface); }
  .qm-header__actions{ display:flex; align-items:center; gap: var(--space-4); }
  .qm-header__burger{ display:inline-flex; flex-direction:column; gap:4px; background:none; border:none; padding:8px; cursor:pointer; @media(min-width:1024px){ display:none; } }
  .qm-burger__line{ width:22px; height:2px; background: var(--color-text-primary); border-radius:2px; display:block; }
  .qm-mobile{ position:fixed; inset:0 0 0 auto; width:min(86vw,380px); background:#fff; z-index:60; transform: translateX(100%); transition: transform var(--motion-slow) var(--ease-out); padding: var(--space-7) var(--space-5); display:flex; flex-direction:column; gap: var(--space-6); box-shadow: var(--shadow-lg); overflow:auto; }
  .qm-mobile--open{ transform: translateX(0); }
  .qm-mobile__close{ align-self:flex-end; background:none; border:none; font-size:22px; cursor:pointer; }
  .qm-mobile__nav{ display:flex; flex-direction:column; gap: var(--space-4); }
  .qm-mobile__nav a{ font-size: 18px; font-weight:600; padding: 8px 0; }
  .qm-mobile__backdrop{ position:fixed; inset:0; background: rgba(13,17,26,0.4); z-index:55; backdrop-filter: blur(2px); }
  .qm-btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:10px 18px; border-radius: var(--radius-pill); font-weight:700; font-size:14px; border:1px solid transparent; transition: transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out); }
  .qm-btn--primary{ background: var(--color-engineering); color:#fff; box-shadow: 0 6px 20px rgba(67,97,238,.25); }
  .qm-btn--primary:hover{ transform: translateY(-1px); box-shadow: 0 10px 28px rgba(67,97,238,.32); }
  @keyframes qmFade{ from{ opacity:0; transform: translateY(4px) scale(.98);} to{ opacity:1; transform:none; } }
  `,
})
export class Header {
  scrolled = signal(false);
  open = signal(false);
  active = signal<string | null>(null);

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') return;
    this.scrolled.set(window.scrollY > 8);
  }
  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') { this.open.set(false); this.active.set(null); }
  }
}
