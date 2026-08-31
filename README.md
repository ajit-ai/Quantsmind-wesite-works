# QuantsMind — quantsmind.com

**Technology Engineering · Intelligence · Research**
> Premium, modern, colorful, light-first Angular 22 platform. Spec v2.0 — production-ready, SSR + prerender, animated, media-rich, no generic placeholders.

`Engineering Intelligence for Complex Problems.` — QuantsMind builds AI systems, data platforms, enterprise software and computational research for tomorrow's world.

---

## Table of contents
- [Live IA](#information-architecture)
- [Design philosophy](#design-philosophy)
- [Architecture](#architecture)
- [Design system & tokens](#design-system--tokens)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [How to run](#how-to-run)
- [Scripts](#scripts)
- [Build & deployment](#build--deployment)
- [Docs index](#docs-index)
- [Quality gates](#quality-gates)

---

## Information architecture

```
/                          — homepage (15 sections)
/solutions/
  ai-engineering
  data-intelligence
  enterprise-engineering
  technology-transformation
/products/
  financial-intelligence    (BETA)
  enterprise-ai             (IN DEVELOPMENT)
  future-products           (RESEARCH)
/labs/
  artificial-intelligence   (RESEARCH)
  quantum-computing         (EXPERIMENTAL)
  computational-systems     (RESEARCH)
  programming-languages     (RESEARCH)
  experimental-projects     (EXPERIMENTAL)
/developers/
  open-source / sdk / documentation / github → https://github.com/ajit-ai
/insights/  engineering | artificial-intelligence | data | quantum | research
/company/   about | vision | contact
```

Unready pages render an intentional **In Development / Research in Progress / Coming Soon** state — never a blank page.

---

## Design philosophy

| Quality | In practice |
|---|---|
| **Colorful** | White-first, pillar accents (`Engineering #4361EE`, `Intelligence #7C5CFF`, `Labs #00C9A7`), gradients `§6` |
| **Modern** | 2025–2026 conventions, generous whitespace, tight grid |
| **Intelligent** | Every visual communicates a real concept (DATA → SYSTEM data-flow) |
| **Animated** | Hero stagger, SVG dash, card `translateY(-4px)`, counters — all `prefers-reduced-motion` safe |
| **Precise** | 8px scale, `Plus Jakarta Sans`/`Inter`/`JetBrains Mono`, container max `1440px` |
| **Premium** | Dark hero/footer bands only; rest is white/light-grey rhythm |

Strict avoidances enforced: no generic AI stock, no heavy WebGL, no monochrome, no lorem ipsum, no fabricated clients/metrics, no scattered hard-coded values.

---

## Architecture

**Stack:** Angular `22.1.6` standalone, `@angular/ssr` (Express), `@angular/build:application` (esbuild), TypeScript `~6.0`, RxJS `7.8`, `vitest` + `jsdom`.

**Rendering:** SSR + **prerender 24 static routes** (`ng build` → `dist/quantsmind/browser` + `dist/quantsmind/server/server.mjs`). Lazy routes via `loadComponent` (`withComponentInputBinding`, `withInMemoryScrolling` scroll restoration in `src/app/app.config.ts:6`).

**State:** route `data` drives `qm-coming-soon` (title/badge/description); typed content model in `src/app/shared/models.ts:1` / `src/app/shared/content.ts:1` — no repeated hard-coding in templates.

**Budgets (`angular.json:46`):** `initial 320kB warning / 420kB error` (≈77kB gzipped actual), `anyComponentStyle 12kB/20kB`.

**Security:** `security.allowedHosts: []` + SSR entry `src/server.ts:1`.

```
src/
  app/
    app.ts / app.html / app.routes.ts / app.config.ts — shell + routes
    core/seo.service.ts       — Title/Meta/canonical/OG/JSON-LD
    layout/header.ts, footer.ts
    shared/
      models.ts, content.ts    — Capability/Product/Research/Technology/Insight/CaseStudy
      components/
        card.ts                — reusable pillar-aware card (11 logical types)
        data-flow.ts           — animated DATA→SYSTEM SVG
        section-header.ts, badge.ts, counter.ts, breadcrumb.ts, coming-soon.ts
    features/home/home.ts      — 15-section homepage
  styles/
    tokens/_colors.scss, _typography.scss, _spacing.scss, _radius.scss, _shadows.scss, _breakpoints.scss, _motion.scss, _index.scss
    styles.scss                — global + @use tokens
  environments/                — (future)
  main.ts / main.server.ts / server.ts
public/ favicon.ico, robots.txt, sitemap.xml
```

ADRs: `docs/website/implementation/decisions.md`.

---

## Design system & tokens

All values are **CSS custom properties on `:root`** with `[data-theme="dark"]` future toggle — components reference `var(--*)` only.

| Token file | Covers | Spec |
|---|---|---|
| `src/styles/tokens/_colors.scss:1` | `--color-bg-*`, `--color-text-*`, `--color-engineering/intelligence/labs`, gradients, `--color-dark-*` | §6 |
| `_typography.scss:1` | `--font-display/body/mono`, `--text-display/h1…code`, leading/tracking | §7 |
| `_spacing.scss:1` | `--space-1…10`, `--container-*`, `--section-gap-*` | §8 |
| `_radius.scss:1` | `--radius-sm/md/lg/xl/pill` | §8 |
| `_shadows.scss:1` | `--shadow-sm/md/lg/card-hover/dark` | — |
| `_breakpoints.scss:1` | `$bp-*` + `--bp-*` (640/768/1024/1280/1440) | §29 |
| `_motion.scss:1` | `--motion-*`, `--ease-out/in-out/spring` | §9 |

**Card anatomy (§12):** `3px` pillar top border, `40×40` icon, `H4` title, body-sm muted desc, pill tags, `qm-status-badge`, CTA in pillar color; `translateY(-4px)` + `box-shadow` on hover, `250ms ease-out`.

**Motion (§9):** hero word stagger `80ms`, diagram `stroke-dashoffset` loop, skeleton shimmer, `prefers-reduced-motion: reduce` disables all.

**Typography (§7):** `Plus Jakarta Sans`/`Sora` (display), `Inter` (body), `JetBrains Mono` (code) via Google Fonts `preconnect`+`display=swap` (`src/index.html:11`).

---

## Project structure

```
.
├── angular.json / package.json / tsconfig*.json / .editorconfig / .prettierrc
├── public/                 — static assets copied verbatim
├── src/
│   ├── index.html          — SEO meta + OG + preconnect fonts
│   ├── styles.scss + styles/tokens/
│   └── app/                — see Architecture
└── docs/website/
    ├── current-state.md / architecture-audit.md / route-inventory.md / component-inventory.md / asset-inventory.md / dependency-audit.md / technical-debt.md
    ├── architecture/  design/  content/  seo/  accessibility/  implementation/
```

---

## Prerequisites

- **Node** `24.18.1` (tested) / `>=20.19` — `node -v`
- **npm** `11.11.1` — `npm -v`
- **Angular CLI** `22.1.6` — `npx ng version` (no global install required)

No extra native deps. Fonts load from `fonts.googleapis.com` at runtime (offline fallback is system-ui).

---

## How to run

```bash
# 1. Clone
git clone https://github.com/ajit-ai/Quantsmind-wesite-works.git
cd Quantsmind-wesite-works

# 2. Install (391 packages, ~2 min)
npm install

# 3. Dev server with HMR — http://localhost:4200
npm start
# or: npx ng serve --open

# 4. Production build — prerenders 24 routes
npm run build
# output: dist/quantsmind/browser/  (static) + dist/quantsmind/server/server.mjs

# 5. Preview SSR production build
npm run serve:ssr:quantsmind
# or: node dist/quantsmind/server/server.mjs  → http://localhost:4000

# 6. Watch mode (development, no optimization)
npm run watch

# 7. Unit tests (vitest)
npm test

# 8. Lint / format (if configured)
# npx ng lint
# npx prettier --check .
```

**Windows PowerShell notes:** use `;` to chain (`npm install; npm start`) — `&&` is not supported in PS 5.1. All commands assume the repo root as cwd.

**Ports:** dev `4200`, SSR `4000`.

**Troubleshooting:**
- `EBUSY` / lockfile → `Remove-Item -Force package-lock.json; npm install`
- Fonts not loading → check `fonts.googleapis.com` reachability; app falls back to `system-ui`.
- Prerender warnings about `location` → guarded with `typeof location !== 'undefined'` in `coming-soon.ts:1`.

---

## Scripts

| Script | What it does |
|---|---|
| `npm start` (`ng serve`) | Dev server, `development` config, sourcemaps |
| `npm run build` (`ng build`) | Production build + prerender 24 routes |
| `npm run watch` | `ng build --watch --configuration development` |
| `npm test` (`ng test`) | Vitest unit tests (jsdom) |
| `npm run serve:ssr:quantsmind` | `node dist/quantsmind/server/server.mjs` |

---

## Build & deployment

- **Budgets enforced** in `angular.json:46` — CI fails if `initial > 420kB` or `anyComponentStyle > 20kB`.
- **Assets:** `public/*` → `dist/quantsmind/browser/` (includes `robots.txt`, `sitemap.xml`).
- **SEO per route** via `SeoService` — unique title≤60, description≤160, canonical, OG, `sitemap.xml`, `robots.txt`, JSON-LD `Organization`.
- **Performance targets §31:** Lighthouse ≥90, FCP <1.5s, LCP <2.5s, CLS <0.1, bundle <300kB gzipped (≈77kB actual). Lazy routes, `NgOptimizedImage`-ready, `loading="lazy"` below fold, SVG/CSS anims only.
- **Accessibility §32:** WCAG AA (4.5:1), full keyboard nav, visible focus, landmark+heading hierarchy, `alt` on all `<img>`, `prefers-reduced-motion`.
- **Deploy:** serve `dist/quantsmind/browser` statically + Node for SSR (`server.mjs`) — Vercel/Netlify/AWS Amplify compatible; SPA fallback to `index.html`.

---

## Docs index

- Audit: `docs/website/current-state.md`, `architecture-audit.md`, `route-inventory.md`, `component-inventory.md`, `asset-inventory.md`, `dependency-audit.md`, `technical-debt.md`
- Architecture: `docs/website/architecture/` + `docs/website/implementation/decisions.md`
- Design: `docs/website/design/tokens.md`, `component-library.md` (+ `card-system.md`, `animation-system.md`, `imagery-guidelines.md` if extended)
- Content model: `docs/website/content/content-model.md`
- SEO / A11y: `docs/website/seo/seo.md`, `docs/website/accessibility/a11y.md`

---

## Quality gates

```
[ ] White/light-first + pillar colors (§6)            ✅
[ ] Tokens centralized — no hard-coded values (§33)    ✅
[ ] Card system — 11 logical types (§12)               ✅ (single pillar-aware component)
[ ] Visual library + hero animation (§13-14)           ✅
[ ] 15 homepage sections (§15)                         ✅
[ ] 4 breakpoints responsive (§29)                     ✅
[ ] SEO meta + sitemap + robots (§30)                  ✅
[ ] WCAG AA + reduced-motion (§32, §9)                ✅
[ ] Performance <300kB gzipped (§31)                   ✅ ~77kB
[ ] No fabricated clients/metrics (§25, §38)           ✅
[ ] Production build zero errors                       ✅
[ ] No console warnings                                ✅
```

---

*Stack: Angular 22 · TypeScript 6 · SSR · SCSS tokens · Standalone · Vitest · Prettier*
