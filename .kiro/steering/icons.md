---
description: Icon usage guidelines - always use SVG, never emojis
inclusion: fileMatch
fileMatch: "**/*.{html,js,jsx,ts,tsx,vue,svelte,astro}"
---

# Icon Guidelines

## Rule

**Never use emojis in code or UI.** Always use inline SVG icons instead.

## Preferred Icon Set

Use [Heroicons](https://heroicons.com/) (outline style, 24x24 viewBox) as the default icon set for this project. All icons should be inline `<svg>` elements with `stroke-width="1.5"` and `stroke="currentColor"`.

## Pattern

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="..." />
</svg>
```

## Sizing

Use Tailwind width/height utilities on the SVG element:
- Small: `w-4 h-4`
- Default: `w-5 h-5` or `w-6 h-6`
- Large: `w-8 h-8`

## Guardrails

- Do NOT use emoji characters (Unicode emoji) as icons or visual indicators in any template, component, or page.
- Do NOT use icon font libraries (Font Awesome, Material Icons via font). Use inline SVG only.
- Always set `fill="none"` and use `stroke="currentColor"` so icons inherit text color and work across themes.
