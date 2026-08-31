# Design Tokens — `src/styles/tokens/`

Tokens are CSS custom properties on `:root` (light-first) + `[data-theme="dark"]` future toggle. No hex/px/timing hard-coded in components.

| File | Covers | Spec |
|------|--------|------|
| `_colors.scss` | bg, border, text, pillar accents, gradients, dark inverse | §6 |
| `_typography.scss` | font stacks (Plus Jakarta Sans/Sora, Inter, JetBrains Mono), type scale, line-height | §7 |
| `_spacing.scss` | 8px scale, container widths, section gaps | §8 |
| `_radius.scss` | pill/md/lg/xl radii | §8 |
| `_shadows.scss` | sm/md/lg + card-hover + dark | — |
| `_breakpoints.scss` | SCSS vars + CSS props for 640/768/1024/1280/1440 | §29 |
| `_motion.scss` | durations + easings (out, in-out, spring) | §9 |
| `_index.scss` | `@forward` all | §33 |

Import: `@use 'styles/tokens' as *;` in `src/styles.scss`. All component SCSS references `var(--*)` only.
