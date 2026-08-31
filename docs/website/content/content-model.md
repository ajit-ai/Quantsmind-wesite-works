# Content Model — `src/app/shared/models.ts` + `content.ts`

Typed interfaces: `Capability`, `Solution`, `Product`, `ResearchProject`, `Technology`, `Insight`, `CaseStudy` + unions `Pillar`, `ProductStatus`. All homepage and section content lives in `content.ts` (no hard-coded template copies). Future CMS can replace exports without touching templates.

Status honesty: research/experimental work never shown as `available`; badges reflect reality (§20).
