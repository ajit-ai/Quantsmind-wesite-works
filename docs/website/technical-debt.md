# Technical Debt

**Date:** 2026-08-31 — Greenfield: zero inherited debt.

## Risks to Avoid Going Forward

1. Hard-coded hex/px/timing in component SCSS → must use CSS custom properties via `src/styles/tokens/`
2. Eager-loaded routes → must use lazy loading per §31
3. Fabricated clients/metrics (§25, §38) → use honest "contact us" placeholder
4. Missing `alt`, heading hierarchy, focus states, `prefers-reduced-motion` (§32, §9)
5. Blank "coming soon" pages → intentional designed states (§4)
6. Inconsistent card styles (§12) → single reusable card anatomy
7. Un-optimized images / missing `NgOptimizedImage` / `loading="lazy"`

No remediation needed pre-scaffold.
