# ADRs

1. **Angular 22 standalone + SSR (`@angular/ssr`)** — SEO (§30) + prerender (24 routes) + lazy chunks (home vs coming-soon). `withComponentInputBinding` + `withInMemoryScrolling`.
2. **Tokens as CSS custom properties** — single source, future dark mode via `[data-theme="dark"]`, no hard-coded values.
3. **Single `qm-card` component** — prevents inconsistent card styles (§38); pillar color via `data-pillar` attribute.
4. **SVG/CSS visuals only** — `qm-data-flow` is SVG + CSS, no Three/GSAP (§38), keeps bundle ~77kB gzipped (<300kB target).
5. **ComingSoon as generic lazy route** — satisfies IA (§4) without blank pages; route `data` drives title/badge/desc + SEO.
6. **Fonts via Google Fonts + preconnect + `display=swap`** — Plus Jakarta Sans/Sora, Inter, JetBrains Mono per §7.
7. **Budgets** — `initial < 320kB warning / 420kB error`, `anyComponentStyle <12/20kB` — enforces §31.
