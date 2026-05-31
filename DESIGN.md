# Design System

## 1. Visual Direction
A calm, professional portfolio with grounded earth tones and precise technical rhythm. The interface should feel handmade and intentional: spacious, readable, credible, and restrained. Avoid decorative effects that compete with the content.

## 2. Color
Use existing semantic CSS variables from `src/layouts/BaseLayout.astro`.

### Light mode
- Primary: `oklch(35% 0.06 130)` — forest green for headings, logo, and core identity.
- Secondary: `oklch(28% 0.05 130)` — deeper green for stronger text or emphasis.
- Accent: `oklch(60% 0.15 55)` — terracotta for links, active states, and restrained highlights.
- Background/surfaces: white and near-white with subtle green tint.
- Text: green-tinted dark neutrals.

### Dark mode
- Invert surfaces into green-tinted dark values.
- Keep accent slightly warmer: `oklch(65% 0.14 50)`.
- Preserve contrast and avoid pure black/white where possible.

### Rules
- No purple/blue gradients.
- No gradient text.
- Use accent sparingly; do not turn large surfaces terracotta.
- Prefer green-tinted neutrals over gray-only palettes.

## 3. Typography
- Current family: Plus Jakarta Sans, weights 400, 500, 600.
- Body size starts at 16px with generous line-height.
- Display text uses `--text-display: clamp(2.5rem, 5vw + 1rem, 4rem)`.
- Type scale follows the existing 1.25 ratio variables (`--text-xs` through `--text-5xl`).

### Rules
- Maintain strong heading hierarchy and readable paragraph width.
- Avoid centered marketing copy unless the section is intentionally short and declarative.
- Do not introduce Inter/Roboto or generic SaaS font defaults.

## 4. Layout & Spacing
- Use existing spacing tokens `--space-1` through `--space-24`.
- Prefer generous vertical rhythm and compact, scannable content groups.
- Cards should be simple, content-first, and aligned to the page grid.
- Keep page sections calm and editorial rather than dense dashboard-like layouts.

### Rules
- Avoid nested card grids and excessive bordered containers.
- Avoid decorative shadows.
- Preserve responsive behavior across mobile, tablet, and desktop.

## 5. Components & Interaction
- Header: simple navigation with accessible theme toggle.
- Footer: social/professional links, restrained presentation.
- Cards: subtle border/surface changes only; no heavy depth.
- Hero: includes the cloud/network SVG as a site signature.
- Links: terracotta accent with clear hover/focus affordance.

### Motion
- Use `--ease-out-quint` / `--ease-out-quart` and durations 150ms, 250ms, 400ms.
- Page transitions use Astro View Transitions.
- Entrance animations must remain subtle.
- Always respect `prefers-reduced-motion`.

## 6. Accessibility & Quality Bar
- Semantic HTML first.
- Visible focus states for interactive controls.
- Keyboard navigation must work for theme toggle and navigation.
- Maintain contrast in both light and dark modes.
- Avoid relying on color alone for meaning.
- Build must pass with `npm run build`.
- Impeccable detector can be run with `npm run impeccable:detect`.
