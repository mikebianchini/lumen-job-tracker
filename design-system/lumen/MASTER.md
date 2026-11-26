# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Lumen
**Generated:** 2026-11-22 21:57:27
**Category:** Job Board/Recruitment
**Token files:** `tokens.json` (W3C Design Tokens Community Group JSON).
**CSS variables:** `tokens.css` (`:root` custom properties).
Token files are master-level only; `--page` overrides do not emit tokens.

---

## Global Rules

### Color Palette

Source of truth: `tokens.json` / `tokens.css`, which mirror the `:root` variables in `index.html`.

| Role | Light | Dark | CSS Variable |
|------|-------|------|--------------|
| Accent (primary action) | `#ff385c` | `#ff5a75` | `--lumen-accent` |
| Accent text | `#d1123f` | `#ff8ea1` | `--lumen-accent-text` |
| Background | `#faf8f5` | `#121212` | `--lumen-background` |
| Surface | `#ffffff` | `#1c1c1c` | `--lumen-surface` |
| Text primary | `#222222` | `#f2f2f2` | `--lumen-text-primary` |
| Text secondary | `#555555` | `#c0c0c0` | `--lumen-text-secondary` |
| Success / Warning / Danger / Info | `#166534` / `#b45309` / `#b91c1c` / `#0f766e` | `#34d399` / `#fbbf24` / `#f87171` / `#5eead4` | `--lumen-success` etc. |

**Rules:** one filled accent button per screen; every stage badge pairs color with a glyph; surfaces are opaque (with a fallback when transparency is reduced).

### Typography

- **Font:** system sans (`--font-sans`) for all UI and body text. Use a serif only for optional page titles, never for body text.
- **Floor:** 12px minimum for any text, 14px body, 16px for mobile inputs (prevents iOS zoom).
- **Touch targets:** 44px minimum on touch devices.

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: var(--lumen-accent);
  color: #000000;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--lumen-accent);
  border: 2px solid var(--lumen-accent);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: var(--lumen-accent-soft);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: var(--lumen-accent);
  outline: none;
  box-shadow: 0 0 0 3px var(--lumen-accent-soft);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Flat Design

**Keywords:** 2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy

**Best For:** Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate

**Key Effects:** No gradients/shadows, simple hover (color/opacity shift), fast loading, clean transitions (150-200ms ease), minimal icons

### Page Pattern

**Pattern Name:** Funnel (3-Step Conversion)

- **Conversion Strategy:** Progressive disclosure. Show only essential info per step. Use progress indicators. Multiple CTAs.
- **CTA Placement:** Each step: mini-CTA. Final: main CTA
- **Section Order:** Hero > Step 1 (problem) > Step 2 (solution) > Step 3 (action) > CTA progression

---

## Anti-Patterns (Do NOT Use)

- ❌ Outdated forms
- ❌ Hidden filters

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
