# Architecture — QuantsMind Website (as built 2026-08-31)

Spec: Master Website Implementation Prompt v2.0 — Angular 22, white-first, pillar-aware.

## 1. Overview

- **App type:** Standalone Angular application (`ApplicationConfig`, no `NgModule`), SSR via `@angular/ssr` (Express `src/server.ts`), prerender 24 routes at build time.
- **Rendering:** `outputMode: server` (`angular.json:36`) → `dist/quantsmind/browser` (static) + `dist/quantsmind/server/server.mjs`. `provideClientHydration()` for hydration.
- **Routing:** `provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling({scrollPositionRestoration:'top', anchorScrolling:'enabled'}))` (`src/app/app.config.ts:6`). All non-home routes are `loadComponent` lazy chunks (`chunk-OAMZEj4V.js` ~1.2kB gzipped).
- **Build:** `@angular/build:application` (esbuild), `inlineStyleLanguage: scss`, budgets `initial 320/420kB`, `anyComponentStyle 12/20kB`.

## 2. Module map

```
src/app/app.ts              — <app-root>: <qm-header> + <router-outlet> + <qm-footer>
src/app/app.routes.ts       — 24 routes: '' (Home) + 23 data-driven ComingSoon placeholders
src/app/app.config.ts       — global providers (router, hydration, error listeners)
src/app/core/seo.service.ts — Title/Meta/canonical/OG/JSON-LD
src/app/layout/header.ts    — sticky, mega-menus, mobile drawer, keyboard a11y
src/app/layout/footer.ts    — dark 4-col grid
src/app/shared/models.ts    — Pillar, ProductStatus, Capability, Product, ResearchProject, Technology, Insight, CaseStudy
src/app/shared/content.ts   — single source arrays (no template duplication)
src/app/shared/components/
  card.ts, data-flow.ts, section-header.ts, badge.ts, counter.ts, breadcrumb.ts, coming-soon.ts
src/app/features/home/home.ts — 15 sections (§15)
src/styles/tokens/* + src/styles.scss — design tokens → :root
src/index.html — fonts preconnect, SEO defaults
public/ — favicon, robots.txt, sitemap.xml → copied via angular.json assets
```

## 3. Key decisions

See `docs/website/implementation/decisions.md` (7 ADRs). Strict TypeScript (`tsconfig.json: strict`), Prettier, no ESLint yet (add `ng lint` when needed).

## 4. Data flow

`content.ts` → `Home` / `ComingSoon` → `SeoService.set()` → `<title>/<meta>/<link rel=canonical>` + `script[type=ld+json]`. No global store — route data is the store for placeholder pages.

## 5. Performance & SEO

- Fonts `preconnect` + `display=swap`, lazy chunks, CSS-only anims, `prefers-reduced-motion`, prerender ensures core content without JS.
- `public/sitemap.xml` + `robots.txt` emitted to `dist/browser`; `SeoService` writes canonical + OG per navigation.

## 6. How to extend

- Add a real page: create `src/app/features/<name>/<name>.ts` (standalone), switch its route from `ComingSoon` to `loadComponent`.
- Add a token: edit `src/styles/tokens/*.scss`, re-use `var(--*)` in component SCSS.
- Add a card variant: extend `qm-card` inputs or compose it — do not fork styles.

## 7. Verification

```
npm run build   # prerenders 24 routes, ~77kB gzipped initial, zero errors
npx tsc --noEmit
npm test        # vitest (route + unit when added)
```
