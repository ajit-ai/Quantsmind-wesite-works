# Asset Inventory

**Existing assets:** none.

## Required Assets (spec §10)

- Fonts: Plus Jakarta Sans / Sora (display), Inter (body), JetBrains Mono (code) — Google Fonts / self-host, `font-display: swap`, preconnect, subset.
- Icons: Lucide / Phosphor — SVG sprite or inline SVG, no icon font.
- Illustrations: custom SVG preferred (hero data-flow, pillar illustrations, problem cards, Labs bento). Undraw.co as fallback. No generic AI stock.
- Images: editorial/WebP + JPEG fallback, `srcset`/`sizes`, `loading="lazy"` below fold, <200KB above fold. Every `<img>` has `alt`.
- OG images: per-route `og/page.jpg` for §30 meta.
- Favicons / manifest.

No asset presently exceeds budget — enforcement via Angular budgets + image optimization (`NgOptimizedImage`).
