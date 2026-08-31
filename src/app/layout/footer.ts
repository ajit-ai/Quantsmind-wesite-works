import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'qm-footer',
  imports: [RouterLink],
  template: `
  <footer class="qm-footer" role="contentinfo">
    <div class="qm-container">
      <div class="qm-footer__grid">
        <div class="qm-footer__brand">
          <a routerLink="/" class="qm-footer__logo"><span class="qm-footer__mark">◈</span> QuantsMind</a>
          <p class="qm-footer__tagline">Engineering intelligence for complex problems. AI systems, data platforms and computational research for tomorrow's world.</p>
          <div class="qm-footer__social">
            <a href="https://github.com/ajit-ai" target="_blank" rel="noopener" aria-label="GitHub">GitHub →</a>
            <a href="mailto:hello@quantsmind.com" aria-label="Email">hello&#64;quantsmind.com</a>
          </div>
        </div>
        <nav aria-label="Solutions">
          <h4 class="qm-footer__title">Solutions</h4>
          <a routerLink="/solutions/ai-engineering">AI Engineering</a>
          <a routerLink="/solutions/data-intelligence">Data Intelligence</a>
          <a routerLink="/solutions/enterprise-engineering">Enterprise Engineering</a>
          <a routerLink="/solutions/technology-transformation">Technology Transformation</a>
        </nav>
        <nav aria-label="Products and Labs">
          <h4 class="qm-footer__title">Products & Labs</h4>
          <a routerLink="/products/financial-intelligence">Financial Intelligence</a>
          <a routerLink="/products/enterprise-ai">Enterprise AI</a>
          <a routerLink="/products/future-products">Future Products</a>
          <a routerLink="/labs/artificial-intelligence">Labs — AI</a>
          <a routerLink="/labs/quantum-computing">Labs — Quantum</a>
        </nav>
        <nav aria-label="Company and Developers">
          <h4 class="qm-footer__title">Company & Developers</h4>
          <a routerLink="/developers/open-source">Open Source</a>
          <a routerLink="/developers/sdk">SDK</a>
          <a routerLink="/developers/documentation">Documentation</a>
          <a routerLink="/insights/engineering">Insights</a>
          <a routerLink="/company/about">About</a>
          <a routerLink="/company/vision">Vision</a>
          <a routerLink="/company/contact">Contact</a>
        </nav>
      </div>
      <div class="qm-footer__bar">
        <span>© {{year}} QuantsMind. All rights reserved.</span>
        <span class="qm-footer__legal"><a routerLink="/company/about">Privacy</a> · <a routerLink="/company/about">Terms</a> · Built with precision.</span>
      </div>
    </div>
  </footer>
  `,
  styles: `
  .qm-footer{ background: var(--color-dark-bg); color: var(--color-dark-text); padding: var(--space-8) 0 var(--space-6); }
  .qm-footer__grid{ display:grid; gap: var(--space-7); @media(min-width:768px){ grid-template-columns: 1.4fr 1fr 1fr 1fr; } }
  .qm-footer__logo{ font-family: var(--font-display); font-weight:800; font-size:18px; display:inline-flex; align-items:center; gap:10px; color: #fff; }
  .qm-footer__mark{ width:28px; height:28px; display:grid; place-items:center; background: var(--gradient-hero); border-radius:8px; font-size:14px; }
  .qm-footer__tagline{ color: var(--color-dark-muted); font-size: var(--text-small); line-height:1.6; margin: var(--space-4) 0; max-width: 36ch; }
  .qm-footer__social{ display:flex; gap: var(--space-4); font-size: var(--text-small); }
  .qm-footer__social a{ color: var(--color-dark-muted); }
  .qm-footer__social a:hover{ color:#fff; }
  .qm-footer__title{ font-size: 12px; letter-spacing:.08em; text-transform:uppercase; color: var(--color-dark-muted); margin: 0 0 var(--space-4); }
  nav{ display:flex; flex-direction:column; gap: 10px; }
  nav a{ color: var(--color-dark-muted); font-size: var(--text-small); }
  nav a:hover{ color: #fff; }
  .qm-footer__bar{ margin-top: var(--space-8); padding-top: var(--space-5); border-top:1px solid var(--color-dark-border); display:flex; flex-wrap:wrap; gap: var(--space-4); justify-content:space-between; font-size: var(--text-xs); color: var(--color-dark-muted); }
  .qm-footer__legal a{ color:inherit; text-decoration: underline; text-underline-offset:3px; }
  `,
})
export class Footer {
  year = new Date().getFullYear();
}
