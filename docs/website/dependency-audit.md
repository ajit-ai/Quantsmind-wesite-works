# Dependency Audit

**Existing dependencies:** none (`package.json` does not exist).

## Target Dependencies (Phase 1)

- `angular@~22`, `@angular/ssr`, `typescript ~5.x`, `rxjs`, `zone.js`
- Dev: `eslint`, `prettier` (if not provided by CLI), `axe-core` (a11y testing)

## Prohibited / Avoid (§38)

- Heavy deps without justification: `three`, `gsap`, large chart libs, etc.
- Prefer CSS/SVG over Canvas/WebGL (§13).
- Keep JS payload minimal for §31 performance targets.

Bundle budget enforced in `angular.json`: initial <300KB gzipped.
