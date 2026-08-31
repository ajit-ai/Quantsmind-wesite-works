# SEO — §30

- Per-page `Title` + `Meta` via `SeoService` (description ≤160, og:title/desc/image/url, twitter:card, canonical link, JSON-LD Organization).
- Fonts preconnect, canonical per route, semantic `h1` per page, skip link, proper heading hierarchy.
- `public/sitemap.xml` + `public/robots.txt` emitted to `dist/browser` via `angular.json` assets.
- Prerendered 24 static routes (verified `dist/quantsmind/browser/index.html` contains hero + H1 + meta).
