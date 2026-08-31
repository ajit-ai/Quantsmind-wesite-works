import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { SectionHeader } from '../../shared/components/section-header';
import { Card } from '../../shared/components/card';
import { StatusBadge } from '../../shared/components/badge';
import { DataFlow } from '../../shared/components/data-flow';
import { AnimatedCounter } from '../../shared/components/counter';
import { CAPABILITIES, PRODUCTS, RESEARCH, TECHNOLOGIES, INSIGHTS, CASE_STUDIES, FEATURED_PRODUCT } from '../../shared/content';

@Component({
  selector: 'qm-home',
  imports: [RouterLink, SectionHeader, Card, StatusBadge, DataFlow, AnimatedCounter],
  template: `
  <!-- HERO -->
  <section class="qm-hero" aria-labelledby="hero-title">
    <div class="qm-container qm-hero__grid">
      <div class="qm-hero__copy">
        <p class="qm-hero__eyebrow">Engineering · Intelligence · Research</p>
        <h1 id="hero-title" class="qm-hero__title">
          @for (w of heroWords; track w.i) { <span class="qm-hero__word" [style.animation-delay]="(400 + w.i*80)+'ms'">{{ w.text }} </span> }
        </h1>
        <p class="qm-hero__sub">QuantsMind builds advanced AI, data, software and computational systems for organizations and the technologies of tomorrow.</p>
        <div class="qm-hero__ctas">
          <a routerLink="/solutions/ai-engineering" class="qm-btn qm-btn--primary qm-hero__cta">Explore Solutions</a>
          <a routerLink="/labs/artificial-intelligence" class="qm-btn qm-btn--ghost">Explore Labs</a>
        </div>
        <div class="qm-hero__metrics">
          <div><strong><qm-animated-counter [value]="42" suffix="+" /></strong><span>systems shipped</span></div>
          <div><strong><qm-animated-counter [value]="99" suffix=".2%" /></strong><span>model accuracy</span></div>
          <div><strong><qm-animated-counter [value]="12" suffix="" /></strong><span>research tracks</span></div>
        </div>
      </div>
      <div class="qm-hero__visual">
        <qm-data-flow />
      </div>
    </div>
    <div class="qm-hero__wave" aria-hidden="true"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path d="M0 30 C 360 60, 1080 0, 1440 30 L 1440 60 L 0 60 Z" fill="#fff"/></svg></div>
  </section>

  <!-- WHO WE ARE -->
  <section class="qm-section">
    <div class="qm-container">
      <qm-section-header eyebrow="Who we are" title="Technology Engineering. Intelligence. Research." description="Three pillars — one system. Each with its own color, rhythm and purpose." />
      <div class="qm-grid qm-grid--3">
        <qm-card pillar="engineering" title="Engineering" description="We build systems. Resilient platforms, pipelines and products that survive scale, regulation and reality." icon="◈" eyebrow="BUILD" [tags]="['AI Engineering','Data Platforms','Enterprise']" href="/solutions/ai-engineering" />
        <qm-card pillar="intelligence" title="Intelligence" description="We build intelligent products. Private AI that understands your data — not demos that forget it." icon="⬢" eyebrow="UNDERSTAND" [tags]="['Financial Intelligence','Enterprise AI']" href="/products/financial-intelligence" />
        <qm-card pillar="labs" title="Labs" description="We explore tomorrow. Quantum, compilers, distributed systems — research that becomes product." icon="✦" eyebrow="EXPLORE" [tags]="['Quantum','Compilers','Systems']" href="/labs/artificial-intelligence" />
      </div>
    </div>
  </section>

  <!-- WHAT WE SOLVE -->
  <section class="qm-section qm-section--alt">
    <div class="qm-container">
      <qm-section-header eyebrow="What we solve" title="The Problems We're Built For" description="Not a technology list — a problem list. We start from what hurts." />
      <div class="qm-grid qm-grid--2">
        <qm-card pillar="intelligence" title="Intelligent Systems" description="Organizations need AI that actually works in production — evaluated, governed and observable." icon="🧠" eyebrow="PROBLEM 01" href="/solutions/ai-engineering" />
        <qm-card pillar="engineering" title="Data Complexity" description="Raw data is not intelligence. Structure, lineage and semantic understanding are." icon="⧉" eyebrow="PROBLEM 02" href="/solutions/data-intelligence" />
        <qm-card pillar="engineering" title="Enterprise Complexity" description="Large organizations need engineering that scales — without rewrites every two years." icon="🏗️" eyebrow="PROBLEM 03" href="/solutions/enterprise-engineering" />
        <qm-card pillar="labs" title="Computational Complexity" description="Some problems require new mathematics and computational approaches. We invest there." icon="∞" eyebrow="PROBLEM 04" href="/labs/computational-systems" />
      </div>
    </div>
  </section>

  <!-- ENGINEERING -->
  <section class="qm-section">
    <div class="qm-container">
      <qm-section-header eyebrow="Engineering" title="What We Build" />
      <div class="qm-eng">
        <div class="qm-eng__feature">
          <qm-card pillar="engineering" [featured]="true" title="AI Engineering" description="Full-stack AI — data pipelines, training, eval harnesses, deployment, monitoring. We ship models that stay accurate." icon="⚡" eyebrow="FEATURED" [tags]="['PyTorch','Eval','Observability']" href="/solutions/ai-engineering" />
        </div>
        <div class="qm-eng__side">
          @for (c of capabilities.slice(1); track c.id) {
            <qm-card [pillar]="c.pillar" [title]="c.title" [description]="c.description" [icon]="c.icon" [href]="c.link" />
          }
        </div>
      </div>
    </div>
  </section>

  <!-- INTELLIGENCE PRODUCTS -->
  <section class="qm-section qm-section--alt">
    <div class="qm-container">
      <qm-section-header eyebrow="Intelligence" title="Intelligent Products" description="Products with honest status — no research sold as production." />
      <div class="qm-grid qm-grid--3">
        @for (p of products; track p.id) {
          <article class="qm-prod">
            <div class="qm-prod__visual" [attr.data-pillar]="p.pillar"><span>{{ p.title.slice(0,2) }}</span></div>
            <qm-status-badge [status]="p.status" [label]="p.status" />
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
            <ul>@for (f of p.features; track f) { <li>{{ f }}</li> }</ul>
            <a [routerLink]="p.link" class="qm-prod__link">Learn more →</a>
          </article>
        }
      </div>
    </div>
  </section>

  <!-- FEATURED PRODUCT (dark) -->
  <section class="qm-band" aria-labelledby="featured-title">
    <div class="qm-container qm-band__grid">
      <div>
        <qm-status-badge status="beta" label="BETA" />
        <h2 id="featured-title" class="qm-band__title">{{ featured.title }} — Spotlight</h2>
        <p class="qm-band__desc">{{ featured.description }}</p>
        <ul class="qm-band__list">@for (f of featured.features; track f){ <li>✓ {{ f }}</li> }</ul>
        <a [routerLink]="featured.link" class="qm-btn qm-btn--primary">Explore {{ featured.title }}</a>
      </div>
      <div class="qm-band__visual" aria-hidden="true">
        <div class="qm-device">
          <div class="qm-device__bar"><span></span><span></span><span></span></div>
          <div class="qm-device__body">
            <div class="qm-device__kpi"><span>Signal</span><strong>+2.4%</strong></div>
            <div class="qm-device__kpi"><span>Risk</span><strong>0.11</strong></div>
            <div class="qm-device__chart"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LABS — bento -->
  <section class="qm-section">
    <div class="qm-container">
      <qm-section-header eyebrow="Labs" title="Exploring the Frontiers" description="Research that earns its keep — every track has active projects." />
      <div class="qm-bento">
        <div class="qm-bento__main"><qm-card pillar="labs" title="Artificial Intelligence" description="Foundation models, reasoning and alignment — plus practical evaluation harnesses." icon="✦" eyebrow="RESEARCH" status="research" statusLabel="RESEARCH" href="/labs/artificial-intelligence" [featured]="true" /></div>
        <qm-card pillar="labs" title="Quantum Computing" description="Algorithms, error correction and hybrid workflows." icon="◐" status="experimental" statusLabel="EXPERIMENTAL" href="/labs/quantum-computing" />
        <qm-card pillar="labs" title="Computational Systems" description="Distributed systems and high-performance runtimes." icon="▦" status="research" statusLabel="RESEARCH" href="/labs/computational-systems" />
        <qm-card pillar="labs" title="Programming Languages" description="LLVM/WASM toolchains and language design." icon="⌨" status="research" statusLabel="RESEARCH" href="/labs/programming-languages" />
        <qm-card pillar="labs" title="Experimental Projects" description="Bold bets that move the frontier." icon="⚗" status="experimental" statusLabel="EXPERIMENTAL" href="/labs/experimental-projects" />
      </div>
    </div>
  </section>

  <!-- HOW WE WORK -->
  <section class="qm-section qm-section--alt">
    <div class="qm-container">
      <qm-section-header eyebrow="Method" title="Our Engineering Approach" />
      <ol class="qm-steps">
        <li><span class="qm-steps__n">01</span><h4>Understand</h4><p>Map the real constraints — data, regulation, latency, scale — before writing code.</p></li>
        <li><span class="qm-steps__n">02</span><h4>Architect</h4><p>Design seams, not monoliths. Systems that evolve without rewrites.</p></li>
        <li><span class="qm-steps__n">03</span><h4>Engineer</h4><p>Build with evals, tests and observability from day one.</p></li>
        <li><span class="qm-steps__n">04</span><h4>Evolve</h4><p>Ship, measure, improve. Research feeds product; product feeds research.</p></li>
      </ol>
    </div>
  </section>

  <!-- TECHNOLOGY -->
  <section class="qm-section">
    <div class="qm-container">
      <qm-section-header eyebrow="Stack" title="Built With Precision" description="Grouped by intent — not a logo wall. Hover to highlight." />
      @for (cat of techCats; track cat.label) {
        <div class="qm-techrow">
          <span class="qm-techrow__label">{{ cat.label }}</span>
          <div class="qm-techrow__chips">
            @for (t of cat.items; track t.id) { <span class="qm-chip2" [title]="t.relevance">{{ t.name }}</span> }
          </div>
        </div>
      }
    </div>
  </section>

  <!-- PROOF -->
  <section class="qm-section qm-section--alt">
    <div class="qm-container">
      <qm-section-header eyebrow="Proof" title="Work That Speaks" description="No fabricated logos or metrics. Real work — summarized honestly." />
      <div class="qm-grid qm-grid--3">
        <qm-card pillar="engineering" title="Case Studies" description="Case studies available to qualified partners — contact us for details. No metrics invented for marketing." icon="📄" href="/company/contact" />
        <qm-card pillar="intelligence" title="Open Source" description="QuantsMind SDK, Karkain, Quantum SDK — explore our work on GitHub." icon="⬡" href="/developers/open-source" />
        <qm-card pillar="labs" title="Research Publications" description="Papers and notes from Labs — shared when they’re ready, not before." icon="🔬" href="/labs/artificial-intelligence" />
      </div>
      <div class="qm-proof__cases">
        @for (c of cases; track c.id) {
          <div class="qm-case"><h4>{{ c.title }}</h4><p><strong>Challenge:</strong> {{ c.challenge }}</p><p><strong>Outcome:</strong> {{ c.outcome }}</p></div>
        }
      </div>
    </div>
  </section>

  <!-- INSIGHTS -->
  <section class="qm-section">
    <div class="qm-container">
      <qm-section-header eyebrow="Insights" title="From Our Engineers" />
      <div class="qm-grid qm-grid--3">
        @for (ins of insights.slice(0,3); track ins.id) {
          <a [routerLink]="ins.link" class="qm-insight">
            <div class="qm-insight__img" aria-hidden="true"></div>
            <span class="qm-insight__meta">{{ ins.category }} · {{ ins.readTime }} · {{ ins.date }}</span>
            <h3>{{ ins.title }}</h3>
            <p>{{ ins.excerpt }}</p>
            <span class="qm-insight__cta">Read →</span>
          </a>
        }
      </div>
      <div class="qm-cta"><a routerLink="/insights/engineering" class="qm-btn qm-btn--ghost">View all insights</a></div>
    </div>
  </section>

  <!-- VISION -->
  <section class="qm-vision" aria-labelledby="vision-title">
    <div class="qm-container">
      <h2 id="vision-title" class="qm-vision__quote">“We build systems that make intelligence <span>inevitable</span> — not accidental.”</h2>
      <a routerLink="/company/vision" class="qm-btn qm-btn--primary">Our Vision →</a>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="qm-section qm-section--cta">
    <div class="qm-container" style="text-align:center">
      <h2 class="qm-cta__title">Have a complex problem worth solving?</h2>
      <p class="qm-cta__desc">We partner with organizations where engineering matters — finance, enterprise, research. Let's talk about what you're building.</p>
      <div class="qm-cta__actions"><a routerLink="/company/contact" class="qm-btn qm-btn--primary">Let's Talk</a><a routerLink="/solutions/ai-engineering" class="qm-btn qm-btn--ghost">Explore Solutions</a></div>
    </div>
  </section>
  `,
  styles: `
  .qm-hero{ background: var(--color-dark-bg); color: var(--color-dark-text); padding: 64px 0 0; position:relative; overflow:hidden; }
  .qm-hero__grid{ display:grid; gap: var(--space-7); align-items:center; @media(min-width:1024px){ grid-template-columns: 1.05fr .95fr; gap: var(--space-8); } }
  .qm-hero__eyebrow{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color: var(--color-labs); font-weight:700; margin:0 0 var(--space-4); animation: qmFadeUp .5s var(--ease-out) both; animation-delay:200ms; }
  .qm-hero__title{ font-family: var(--font-display); font-size: var(--text-display); line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); margin:0; }
  .qm-hero__word{ display:inline-block; opacity:0; animation: qmFadeUp .6s var(--ease-out) both; }
  .qm-hero__sub{ color: var(--color-dark-muted); font-size: var(--text-body-lg); line-height:1.6; max-width:52ch; margin: var(--space-5) 0 0; animation: qmFadeUp .5s var(--ease-out) both; animation-delay:700ms; }
  .qm-hero__ctas{ display:flex; gap: var(--space-4); flex-wrap:wrap; margin-top: var(--space-6); animation: qmFadeUp .5s var(--ease-out) both; animation-delay:900ms; }
  .qm-hero__metrics{ display:flex; gap: var(--space-6); margin-top: var(--space-7); flex-wrap:wrap; animation: qmFadeUp .5s var(--ease-out) both; animation-delay:1000ms; }
  .qm-hero__metrics div{ display:flex; flex-direction:column; gap:4px; }
  .qm-hero__metrics strong{ font-family: var(--font-display); font-size: 22px; color:#fff; }
  .qm-hero__metrics span{ font-size:12px; color: var(--color-dark-muted); text-transform:uppercase; letter-spacing:.06em; }
  .qm-hero__visual{ animation: qmFadeUp .7s var(--ease-out) both; animation-delay:1100ms; min-height: 320px; display:grid; place-items:center; }
  .qm-hero__wave{ line-height:0; margin-top: 40px; }
  .qm-hero__wave svg{ width:100%; height: 40px; display:block; @media(min-width:1024px){ height: 60px; } }
  .qm-btn{ display:inline-flex; align-items:center; justify-content:center; padding:12px 22px; border-radius: var(--radius-pill); font-weight:700; font-size:14px; border:1px solid transparent; transition: transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast) var(--ease-out); }
  .qm-btn--primary{ background: var(--gradient-engineering); color:#fff; box-shadow: 0 8px 24px rgba(67,97,238,.35); }
  .qm-btn--primary:hover{ transform: translateY(-2px); }
  .qm-btn--ghost{ background: transparent; color: var(--color-text-primary); border-color: var(--color-border-strong); }
  .qm-hero .qm-btn--ghost{ color:#fff; border-color: rgba(255,255,255,.25); }
  .qm-hero .qm-btn--ghost:hover{ background: rgba(255,255,255,.08); }
  .qm-grid{ display:grid; gap: var(--space-5); }
  .qm-grid--3{ @media(min-width:768px){ grid-template-columns: repeat(2,1fr);} @media(min-width:1024px){ grid-template-columns: repeat(3,1fr);} }
  .qm-grid--2{ @media(min-width:768px){ grid-template-columns: repeat(2,1fr);} }
  .qm-eng{ display:grid; gap: var(--space-5); @media(min-width:1024px){ grid-template-columns: 1.2fr .8fr; } }
  .qm-eng__side{ display:grid; gap: var(--space-5); }
  .qm-prod{ background: var(--color-bg-base); border:1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: var(--space-5); display:flex; flex-direction:column; gap:12px; transition: transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out); }
  .qm-prod:hover{ transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .qm-prod__visual{ height: 96px; border-radius: var(--radius-md); display:grid; place-items:center; font-family: var(--font-display); font-weight:800; color:#fff; font-size:22px; }
  .qm-prod__visual[data-pillar="intelligence"]{ background: var(--gradient-intelligence); }
  .qm-prod__visual[data-pillar="engineering"]{ background: var(--gradient-engineering); }
  .qm-prod h3{ margin:0; font-size:18px; }
  .qm-prod p{ margin:0; color: var(--color-text-secondary); font-size:14px; line-height:1.6; }
  .qm-prod ul{ margin:0; padding-left:18px; color: var(--color-text-secondary); font-size:13px; display:flex; flex-direction:column; gap:4px; }
  .qm-prod__link{ font-weight:700; font-size:14px; color: var(--color-intelligence); margin-top:4px; }
  .qm-band{ background: var(--color-dark-bg); color: var(--color-dark-text); padding: var(--section-gap-md) 0; }
  .qm-band__grid{ display:grid; gap: var(--space-7); align-items:center; @media(min-width:1024px){ grid-template-columns: 1fr 1fr; } }
  .qm-band__title{ font-family: var(--font-display); font-size: var(--text-h2); line-height:1.15; margin: var(--space-4) 0; }
  .qm-band__desc{ color: var(--color-dark-muted); font-size: var(--text-body-lg); line-height:1.6; }
  .qm-band__list{ list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; color: var(--color-dark-text); margin: var(--space-5) 0; }
  .qm-band__visual{ display:grid; place-items:center; }
  .qm-device{ width:min(420px,100%); background:#161B25; border:1px solid var(--color-dark-border); border-radius: 20px; overflow:hidden; box-shadow: var(--shadow-dark); }
  .qm-device__bar{ display:flex; gap:6px; padding:14px; border-bottom:1px solid var(--color-dark-border); }
  .qm-device__bar span{ width:10px; height:10px; border-radius:50%; background: var(--color-dark-border); }
  .qm-device__body{ padding: var(--space-5); display:grid; gap: var(--space-4); }
  .qm-device__kpi{ display:flex; justify-content:space-between; align-items:center; background: rgba(255,255,255,.06); border-radius:12px; padding:12px 16px; }
  .qm-device__kpi span{ color: var(--color-dark-muted); font-size:13px; }
  .qm-device__kpi strong{ color:#fff; font-family: var(--font-mono); }
  .qm-device__chart{ height:72px; border-radius:12px; background: linear-gradient(90deg, rgba(67,97,238,.3), rgba(0,201,167,.3)); position:relative; overflow:hidden; }
  .qm-device__chart::after{ content:''; position:absolute; inset:0; background: repeating-linear-gradient(90deg, transparent 0 18px, rgba(255,255,255,.08) 18px 19px); }
  .qm-bento{ display:grid; gap: var(--space-5); @media(min-width:768px){ grid-template-columns: repeat(3,1fr);} }
  .qm-bento__main{ @media(min-width:768px){ grid-column: span 2; grid-row: span 2; } }
  .qm-steps{ list-style:none; padding:0; margin:0; display:grid; gap: var(--space-5); @media(min-width:1024px){ grid-template-columns: repeat(4,1fr);} }
  .qm-steps li{ background: var(--color-bg-base); border:1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: var(--space-5); }
  .qm-steps__n{ font-family: var(--font-mono); font-size:12px; font-weight:700; color: var(--color-engineering); letter-spacing:.08em; }
  .qm-steps h4{ margin:8px 0 8px; font-size:18px; }
  .qm-steps p{ margin:0; color: var(--color-text-secondary); font-size:14px; line-height:1.6; }
  .qm-techrow{ display:grid; gap: var(--space-4); padding: var(--space-4) 0; border-bottom:1px solid var(--color-border-subtle); @media(min-width:768px){ grid-template-columns: 160px 1fr; align-items:center; } }
  .qm-techrow__label{ font-size:12px; letter-spacing:.08em; text-transform:uppercase; font-weight:700; color: var(--color-text-muted); }
  .qm-techrow__chips{ display:flex; flex-wrap:wrap; gap:8px; }
  .qm-chip2{ padding:8px 12px; border-radius: var(--radius-pill); background: var(--color-bg-surface); border:1px solid var(--color-border-subtle); font-size:13px; font-weight:500; color: var(--color-text-secondary); transition: all var(--motion-fast) var(--ease-out); cursor:default; }
  .qm-chip2:hover{ background:#fff; color: var(--color-text-primary); border-color: var(--color-border-strong); transform: translateY(-1px); }
  .qm-proof__cases{ margin-top: var(--space-6); display:grid; gap: var(--space-4); @media(min-width:1024px){ grid-template-columns: repeat(3,1fr);} }
  .qm-case{ background:#fff; border:1px solid var(--color-border-subtle); border-radius: var(--radius-md); padding: var(--space-4); }
  .qm-case h4{ margin:0 0 8px; font-size:16px; }
  .qm-case p{ margin:4px 0; font-size:13px; color: var(--color-text-secondary); line-height:1.5; }
  .qm-insight{ background: var(--color-bg-base); border:1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: var(--space-5); display:flex; flex-direction:column; gap:10px; transition: transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base) var(--ease-out); }
  .qm-insight:hover{ transform: translateY(-4px); box-shadow: var(--shadow-lg); }
  .qm-insight__img{ height: 140px; border-radius: var(--radius-md); background: linear-gradient(135deg, #eef2ff, #f5f3ff); border:1px solid var(--color-border-subtle); }
  .qm-insight__meta{ font-size:11px; letter-spacing:.06em; text-transform:uppercase; color: var(--color-text-muted); font-weight:600; }
  .qm-insight h3{ margin:0; font-size:18px; line-height:1.3; }
  .qm-insight p{ margin:0; color: var(--color-text-secondary); font-size:14px; line-height:1.6; flex:1; }
  .qm-insight__cta{ font-weight:700; font-size:14px; color: var(--color-engineering); }
  .qm-cta{ display:flex; justify-content:center; margin-top: var(--space-6); }
  .qm-vision{ background: var(--color-dark-bg); color:#fff; padding: var(--section-gap-md) 0; text-align:center; position:relative; overflow:hidden; }
  .qm-vision::before{ content:''; position:absolute; inset:0; background: var(--gradient-hero); opacity:.18; }
  .qm-vision .qm-container{ position:relative; }
  .qm-vision__quote{ font-family: var(--font-display); font-size: clamp(28px,4vw,44px); line-height:1.15; letter-spacing: var(--tracking-tight); margin:0 0 var(--space-6); }
  .qm-vision__quote span{ background: var(--gradient-hero); -webkit-background-clip:text; -webkit-text-fill-color: transparent; background-clip:text; }
  .qm-section--cta{ background: var(--color-bg-surface); text-align:center; }
  .qm-cta__title{ font-family: var(--font-display); font-size: var(--text-h2); margin:0; }
  .qm-cta__desc{ color: var(--color-text-secondary); font-size: var(--text-body-lg); max-width: 60ch; margin: var(--space-4) auto 0; line-height:1.6; }
  .qm-cta__actions{ display:flex; gap: var(--space-4); justify-content:center; flex-wrap:wrap; margin-top: var(--space-6); }
  @keyframes qmFadeUp{ from{ opacity:0; transform: translateY(14px);} to{ opacity:1; transform:none; } }
  `,
})
export class Home implements OnInit {
  private seo = inject(SeoService);
  heroWords = 'Engineering Intelligence for Complex Problems.'.split(' ').map((t, i) => ({ text: t, i }));
  capabilities = CAPABILITIES;
  products = PRODUCTS;
  research = RESEARCH;
  insights = INSIGHTS;
  cases = CASE_STUDIES;
  featured = FEATURED_PRODUCT;
  techCats = [
    { label: 'AI & Intelligence', items: TECHNOLOGIES.filter(t => t.category === 'ai') },
    { label: 'Data', items: TECHNOLOGIES.filter(t => t.category === 'data') },
    { label: 'Software', items: TECHNOLOGIES.filter(t => t.category === 'software') },
    { label: 'Cloud', items: TECHNOLOGIES.filter(t => t.category === 'cloud') },
    { label: 'Systems', items: TECHNOLOGIES.filter(t => t.category === 'systems') },
  ];
  ngOnInit(): void {
    this.seo.set({
      title: 'QuantsMind — Engineering Intelligence for Complex Problems',
      description: 'Technology engineering, intelligence, and research — AI systems, data platforms, enterprise software and computational research for tomorrow.',
      canonical: 'https://quantsmind.com/',
      ogImage: 'https://quantsmind.com/og/home.jpg',
    });
  }
}
