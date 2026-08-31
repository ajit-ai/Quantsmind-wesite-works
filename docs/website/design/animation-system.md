# Animation System — §9

Tokens: `src/styles/tokens/_motion.scss` — `--motion-*` (100/150/250/400/700/1000ms), `--ease-out/in-out/spring`.

Required animations (semantic only):

- **Hero stagger:** eyebrow `200ms`, title words `80ms` stagger from `400ms`, sub `700ms`, CTAs `900ms`, diagram `1100ms` (`stroke-dashoffset`), chips `2300ms` — `src/app/features/home/home.ts: home hero styles`.
- **Data-flow:** SVG `stroke-dasharray 8 6` + `qmDash 2.8s linear infinite`, nodes `qmPop .6s var(--ease-spring)`.
- **Section entry:** via CSS (future: `IntersectionObserver` single `slide-up+fade` — not per-element).
- **Cards:** `250ms ease-out` on `transform, box-shadow, border-color` only (≤2 props).
- **Nav:** desktop mega `fade+scale .22s`, mobile drawer `slide-in right` + staggered links.
- **Counters:** `qm-animated-counter` interval 28ms × 24 steps.

Reduced motion: `@media (prefers-reduced-motion: reduce)` in `src/styles.scss` disables all animations.

No heavy JS libs (no GSAP/Three) — bundle stays ~77kB gzipped.
