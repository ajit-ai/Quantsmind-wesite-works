# Component Library

## Core (standalone, OnPush where applicable)
- `qm-header` — sticky, transparent→solid on scroll, mega menus, mobile slide-in, keyboard accessible, skip link.
- `qm-footer` — dark band, 4-col grid.
- `qm-section-header` — eyebrow + title + description (center variant).
- `qm-status-badge` — 7 variants (available/beta/in-development/research/experimental/open-source/archived).
- `qm-animated-counter` — Intersection-free count-up on init.
- `qm-breadcrumb` — Home + crumbs.

## Card (`qm-card`)
Single reusable card anatomy (§12): top 3px pillar border, 40×40 icon, title/desc, pill tags, status badge, CTA. Variants via `pillar` input + `featured` flag. Used for all card types (capability/solution/product/research/etc.) to guarantee visual consistency.

## Visual Library
- `qm-data-flow` — SVG `DATA → STRUCTURE → KNOWLEDGE → INTELLIGENCE → SYSTEM` with `stroke-dasharray` animation + staggered node pop + floating chips. Respects `prefers-reduced-motion`.

All styles use tokens only; transitions `250ms ease-out`, hover `translateY(-4px)`.
