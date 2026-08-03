---
description: DaisyUI 5 component library guidelines for Tailwind CSS 4
inclusion: fileMatch
fileMatch: "**/*.{html,js,jsx,ts,tsx,vue,svelte,astro,css}"
---

# DaisyUI 5 Guidelines

This project uses **daisyUI 5**, a CSS component library for **Tailwind CSS 4**.

## Styling Priority Order

When styling any element, follow this priority (highest to lowest):

1. **daisyUI classes first** — Use semantic component classes (`btn`, `card`, `alert`, `modal`, etc.) and their modifiers before anything else.
2. **Tailwind CSS utility classes** — For layout, spacing, sizing, and anything daisyUI doesn't cover, use Tailwind utilities.
3. **Custom CSS as a last resort** — Only write custom CSS in `style.css` when neither daisyUI nor Tailwind can achieve the desired result.

Always exhaust daisyUI and Tailwind options before adding custom CSS. If you find yourself writing custom CSS, re-check if a daisyUI component/modifier or Tailwind utility already solves it.

## Key Principles

1. **Use semantic component classes** (`btn`, `card`, `alert`, `modal`, etc.) instead of rebuilding UI from raw Tailwind utilities.
2. **Use semantic color names** (`primary`, `secondary`, `accent`, `neutral`, `info`, `success`, `warning`, `error`) for theme compatibility — never hardcode hex/rgb values for UI states.
3. **Combine daisyUI classes with Tailwind utilities** for layout (flex, grid, spacing, sizing).
4. **Use `data-theme` attribute** to apply or scope themes.
5. **Check component modifiers** for size (`-xs`, `-sm`, `-md`, `-lg`, `-xl`), color, and style variants before writing custom CSS.

## Installation

```css
@import "tailwindcss";
@import "daisyui";
```

## Color System

| Name | Purpose |
|------|---------|
| `primary` / `primary-content` | Main brand color + its foreground |
| `secondary` / `secondary-content` | Secondary brand color |
| `accent` / `accent-content` | Accent highlights |
| `neutral` / `neutral-content` | Neutral tones |
| `base-100`, `base-200`, `base-300` / `base-content` | Page backgrounds + text |
| `info`, `success`, `warning`, `error` + `-content` | State colors |

Use with any Tailwind utility: `bg-primary`, `text-secondary`, `border-accent`.

## Component Reference

For complete component docs and syntax, refer to:
#[[file:.kiro/skills/daisyui/SKILL.md]]

## Common Patterns

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary btn-sm">Small Outline</button>
```

### Cards
```html
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Title</h2>
    <p>Content</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

### Modals
```html
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Title</h3>
    <p class="py-4">Content</p>
    <div class="modal-action">
      <form method="dialog"><button class="btn">Close</button></form>
    </div>
  </div>
</dialog>
```

### Navigation
```html
<div class="navbar bg-base-100">
  <div class="navbar-start"><a class="btn btn-ghost text-xl">Brand</a></div>
  <div class="navbar-center"><ul class="menu menu-horizontal px-1">...</ul></div>
  <div class="navbar-end"><a class="btn">CTA</a></div>
</div>
```

## Guardrails

- Do NOT use raw color utilities (`bg-blue-500`, `text-red-600`) for semantic UI elements — use daisyUI color names instead.
- Do NOT rebuild components (buttons, cards, modals) from scratch with Tailwind utilities when a daisyUI class exists.
- Do NOT use deprecated daisyUI 4 patterns (e.g. `btn-xs` via `btn-group`). Use daisyUI 5 syntax.
- Always verify responsive behavior with Tailwind breakpoint prefixes (e.g. `lg:btn-lg`).
- Themes are applied via `data-theme="themename"` on `<html>` or any wrapper element.

## Available Themes

light, dark, cupcake, bumblebee, emerald, corporate, synthwave, retro, cyberpunk, valentine, halloween, garden, forest, aqua, lofi, pastel, fantasy, wireframe, black, luxury, dracula, cmyk, autumn, business, acid, lemonade, night, coffee, winter, dim, nord, sunset, caramellatte, abyss, silk
