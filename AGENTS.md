# Carlos Paramio Website - AI Agent Context

## Project Overview
Personal portfolio website built with Astro 5.x for Carlos Paramio, Software & Cloud Architect.

**Live**: https://carlosparamio.com  
**Stack**: Astro 5.x, vanilla CSS, no UI framework

---

## Design System

### Color Palette (Earth Tones)
- **Primary**: `oklch(35% 0.06 130)` - Forest green (headings, logo)
- **Secondary**: `oklch(28% 0.05 130)` - Deep green
- **Accent**: `oklch(60% 0.15 55)` - Terracotta (links, hover states)
- **Background**: White with subtle green tints
- **Dark mode**: Inverted with green-tinted surfaces

### Typography
- **Font**: Plus Jakarta Sans (Google Fonts) - 400, 500, 600 weights
- **Display**: Fluid `clamp(2.5rem, 5vw + 1rem, 4rem)`
- **Scale**: 1.25 ratio (--text-xs through --text-5xl)

### Motion
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint)
- **Durations**: 150ms (fast), 250ms (base), 400ms (slow)
- **Page transitions**: View Transitions API with slide animation
- **Reduced motion**: Respected via `@media (prefers-reduced-motion)`

### Components
- Cards with left accent border on hover
- Theme toggle with iOS-style slider
- Hero network SVG graphic (cloud infrastructure concept)

---

## Key Files

| File | Purpose |
|------|---------|
| `src/layouts/BaseLayout.astro` | Main layout, CSS variables, View Transitions |
| `src/components/Header.astro` | Navigation, theme toggle |
| `src/components/Footer.astro` | Footer with social links |
| `src/pages/index.astro` | Home with hero, services, testimonials |
| `src/pages/retro.astro` | ZX Spectrum emulator page |
| `src/styles/components.css` | Card, service, testimonial styles |

---

## Important Notes for AI Agents

### DO
- Follow earth tones palette (green/terracotta, NOT purple-blue)
- Use semantic CSS variables from BaseLayout
- Support prefers-reduced-motion
- Use Plus Jakarta Sans, NOT Inter/Roboto

### DON'T
- Add emoji icons
- Use gradient text or backgrounds
- Add decorative shadows to cards
- Use generic AI-slop aesthetics

### Astro 5.x Notes
- Use `astro:page-load` event (NOT `astro:after-swap`) for View Transitions
- ViewTransitions component imported from `astro:transitions`
- Prefetch enabled for all links

---

## Commands

```bash
# Development
docker compose up

# Build
docker compose run --rm dev npm run build

# Rebuild after package changes
docker compose down -v && docker compose up --build -d
```
