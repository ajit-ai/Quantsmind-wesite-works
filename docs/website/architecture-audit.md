# Architecture Audit

**Date:** 2026-08-31 — Phase 0 (greenfield) → 2026-08-31 as-built

## Phase 0 — greenfield (before scaffold)

- No `angular.json` → no builder, no budgets, no outputPath.
- No `tsconfig.json`, no `src/`, no routing, no SSR.

## As-built (current)

See canonical doc: `docs/website/architecture/architecture.md` (7 ADRs, module map, data flow, perf/SEO, extension guide).

Snapshot:
- Angular 22.1.6 standalone + `@angular/ssr` Express (`src/server.ts:1`), prerender 24 routes.
- `angular.json:1` → `@angular/build:application` (esbuild), budgets `320/420kB`.
- `src/app/app.config.ts:6` uses `withComponentInputBinding` + `withInMemoryScrolling`.
- Tokens → `src/styles/tokens/*.scss` as CSS props on `:root`.
- All routes lazy (`loadComponent`), homepage is the only heavy chunk (47kB raw).
- Verified: `npm run build` prerenders 24 routes, `~77kB` gzipped initial, `npx tsc --noEmit` clean.
