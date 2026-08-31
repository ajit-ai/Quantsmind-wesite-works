# Imagery Guidelines — §10

- **Hero/visuals:** custom SVG (`qm-data-flow`) + CSS device mockup — no stock as identity.
- **Acceptable:** custom SVG, Undraw.co (color-matched), Unsplash for editorial only, Lucide/Phosphor inline SVG icons, Lottie for product demos.
- **Unacceptable:** robot-hand, glowing brain, overused AI spheres.
- **Implementation:** every `<img>` has `alt` (decorative `alt=""`), `srcset/sizes`, `loading="lazy"` below fold, `NgOptimizedImage`-ready, WebP + JPEG fallback, <200kB above fold, compress via build.
- Current placeholders use CSS gradients + initials (e.g. product visuals) until real product UI/mockups are supplied — visually intentional, not empty boxes.
