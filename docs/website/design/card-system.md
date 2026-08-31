# Card System — `src/app/shared/components/card.ts`

Single reusable component covering all 11 logical types (§12): `qm-capability-card`, `qm-solution-card`, `qm-product-card`, `qm-research-card`, `qm-technology-card`, `qm-insight-card`, `qm-case-study-card`, `qm-project-card`, `qm-metric-card`, `qm-nav-card`, `qm-feature-card`.

Pillar via `input<Pillar> pillar` → `data-pillar="engineering|intelligence|labs"` drives the `3px` top accent and CTA color. `featured` enlarges padding for hero-level highlights.

Anatomy: top border → 40×40 icon → eyebrow → H4 title → muted desc → pill tags → `qm-status-badge` → CTA (`Learn more →`). Hover: `translateY(-4px)` + `box-shadow: var(--shadow-card-hover)` + border tint, `250ms ease-out`.

Layout diversity is composed in parents (e.g. `home.ts` 3-col, 2-col, bento, horizontal list) — no style forks inside the card.
