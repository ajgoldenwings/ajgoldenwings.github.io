---
description: Strict rule preventing custom CSS — use only daisyUI and Tailwind utilities
inclusion: fileMatch
fileMatch: "**/*.{html,js,jsx,ts,tsx,vue,svelte,astro,css}"
---

# No Custom CSS Rule

## Absolute Restriction

**Do NOT add, modify, or append any custom CSS to `style.css` or any other stylesheet.** This is a hard rule, not a suggestion.

All styling MUST be achieved using:
1. **daisyUI component classes** (btn, card, alert, badge, loading, etc.)
2. **Tailwind CSS utility classes** (flex, grid, animate-, transition-, opacity-, etc.)

## What This Means

- Never write `@keyframes` — use Tailwind's built-in animation utilities (`animate-pulse`, `animate-spin`, `animate-bounce`) or daisyUI's loading components.
- Never write hover/focus pseudo-class styles in CSS — use Tailwind's `hover:`, `focus:`, `active:` prefixes.
- Never write media queries in CSS — use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).
- Never write custom properties or CSS variables — use daisyUI's semantic color system.
- Never write backdrop-filter, box-shadow, or transform in CSS — use Tailwind's `backdrop-blur-*`, `shadow-*`, `translate-*`, `scale-*` utilities.
- Never add animation delays or durations in CSS — use Tailwind's `delay-*` and `duration-*` utilities.

## Animations Without Custom CSS

For entry animations, use Tailwind classes:
- `animate-pulse` for pulsing loading states
- `animate-spin` for spinners
- `transition-all duration-300` for smooth transitions
- `hover:-translate-y-1 hover:shadow-lg` for hover lift effects

For loading states, use daisyUI:
- `<span class="loading loading-spinner"></span>`
- `<span class="loading loading-dots"></span>`

## If Something Seems Impossible Without CSS

If a design requirement appears to need custom CSS, **simplify the design** to fit within daisyUI + Tailwind capabilities rather than adding custom CSS. The constraint is more important than pixel-perfect implementation of any specific visual effect.

## Existing CSS Exceptions

The only acceptable custom CSS is what already exists in `style.css` for features that genuinely cannot be achieved with utilities (e.g., the hero gradient text animation). No new custom CSS should be added.
