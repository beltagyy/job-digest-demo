# Job Digest - PRO MAX Design Framework Guide

## What is PRO MAX?

**PRO MAX** is a professional-grade design framework built on 10 critical rule categories ranked by impact:

1. ✅ **Accessibility (CRITICAL)** — WCAG compliance, focus states, keyboard nav
2. ✅ **Touch & Interaction (CRITICAL)** — 44px targets, micro-feedback, gesture handling
3. ✅ **Performance (HIGH)** — GPU animations, lazy-loading, LCP < 2.5s
4. ✅ **Style Selection (HIGH)** — Consistent typography, icons, dark mode
5. ✅ **Layout & Responsive (HIGH)** — Mobile/tablet/desktop breakpoints, safe areas
6. ✅ **Typography & Color (MEDIUM)** — Type scales, semantic tokens, contrast ratios
7. ✅ **Animation (MEDIUM)** — Purpose-driven motion, easing, reduced-motion support
8. ✅ **Forms & Feedback (MEDIUM)** — Validation, error messages, loading states
9. ✅ **Navigation (HIGH)** — Clear IA, keyboard accessible, deep linking
10. ✅ **Data & Charts (LOW)** — Visualization types, accessibility

---

## Job Digest Design System

### Core Philosophy

**CLARITY + SPEED** = minimize friction, maximize signal

Every design decision serves this thesis. The signature element—animated score badge (purple ↔ cyan)—represents AI intelligence matching user to job in real-time.

### Color Palette (8 Semantic Tokens)

```
Brand Dark:    #0F172A (bg-brand-dark)      — Primary background
Brand Surface: #1a232e (bg-brand-surface)   — Cards, containers
Accent:        #A78BFA (brand-accent)       — Primary CTAs (4.5:1 contrast)
Cyan:          #0ea5e9 (brand-cyan)         — Links, secondary (5.2:1 contrast)
Text Primary:  #f8fafc (text-primary)       — Body text (16:1 contrast)
Text Muted:    #94a3b8 (text-muted)         — Secondary text (7.3:1 contrast)
Success:       #10b981                       — Scores 8+, confirmations (5.1:1)
Warning:       #f59e0b                       — Scores 6-8, alerts (4.8:1)
Error:         #ef4444                       — Form errors (5.9:1 contrast)
```

**All ratios meet WCAG 2.1 AA minimum (4.5:1 for normal text).**

### Typography System

| Role | Font | Sizes | Weight | Usage |
|------|------|-------|--------|-------|
| **Display** | IBM Plex Mono | 32→56px (h1), 24→42px (h2) | 600, 700 | Headlines, job titles, prominent scores |
| **Body** | Inter | 14-16px | 300-600 | Copy, descriptions, labels |
| **Mono** | JetBrains Mono | 12-14px | 400, 600 | Salary ranges, scores, specs |

**Reading Rhythm**: 1.5-2.4 line-height depending on context  
**Letter Spacing**: -0.02em (h1), -0.01em (h2, body), 0.01em (captions)

### Component Library

#### Button Variants

**Primary** (Gradient accent→cyan)
```html
<Button>Get Early Access →</Button>
```
- States: Default | Hover (scale 1.02, shadow-lg) | Focus (ring 2px) | Active (scale 0.98) | Disabled
- Min height: 48px (mobile) | Padding: 12px vertical, 20px horizontal

**Secondary** (Bordered)
```html
<Button variant="secondary">View on GitHub</Button>
```
- Border: 1px white/30 | Hover: bg-white/10 + border-white/50

**Ghost** (Text-only)
```html
<Button variant="ghost">Learn more</Button>
```
- No background | Hover: bg-brand-accent/10

#### Form Inputs

```html
<FormInput
  name="email"
  type="email"
  placeholder="your@email.com"
  required
  ariaLabel="Email address"
  error={errorMessage}
/>
```

**Features**:
- Min 44px height (touch target)
- Focus: ring 2px + border white/50
- Error state: border-error + inline error message
- Placeholder: text-muted, opacity-60
- Auto-fill background removed (custom webkit styling)

#### Score Badges

```html
<!-- 8-10: Excellent -->
<span class="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-300 rounded-full font-mono font-bold animate-pulse-glow">
  9.2
</span>

<!-- 6-8: Good -->
<span class="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-full font-mono">
  7.8
</span>
```

**Animation**: pulse-glow (2s) | purple→cyan gradient cycle

### Responsive Breakpoints

```css
Mobile:   320px-640px   → Stack layouts, 16px padding, 1-column
Tablet:   641px-1024px  → 2-column layouts, 24px padding
Desktop:  1025px+       → 3-column layouts, max-width 1280px
```

**Safe Areas**:
- iOS notch/bezel: `safe-area-inset-*` variables
- Mobile bottom: `safe-area-inset-bottom` for nav

### Animation & Motion

**Easing Curves**:
- Entrance: `ease-out-cubic` (0.16, 1, 0.3, 1) — 300ms
- Exit: `ease-in-cubic` (0.7, 0, 0.84, 0) — 300ms
- Interactive: `ease-in-out-cubic` (0.4, 0, 0.2, 1) — 150-200ms

**Animations**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% {
    backgroundPosition: 0% 50%;
    boxShadow: 0 0 20px rgba(167, 139, 250, 0.3);
  }
  50% {
    backgroundPosition: 100% 50%;
    boxShadow: 0 0 30px rgba(14, 165, 233, 0.5);
  }
}
```

**Reduced Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility Checklist (WCAG 2.1 AA)

### Color & Contrast
- [ ] All text meets 4.5:1 contrast (or 3:1 for large text)
- [ ] No color-only information coding
- [ ] Success/error/warning states use icons + color

### Keyboard Navigation
- [ ] Tab through all interactive elements in logical order
- [ ] No keyboard traps
- [ ] Focus visible on all elements (ring 2px minimum)

### Semantic HTML
- [ ] `<button>` for actions
- [ ] `<form>` with proper structure
- [ ] `<nav>`, `<main>`, `<section>` landmarks
- [ ] `<label>` associated with `<input>`

### ARIA & Labels
- [ ] `aria-label` on icon-only buttons
- [ ] `aria-describedby` on inputs with error messages
- [ ] `role="alert"` on error messages
- [ ] `aria-hidden` on decorative elements

### Motion & Animation
- [ ] `@media (prefers-reduced-motion: reduce)` on all animations
- [ ] No auto-playing videos or animations
- [ ] No flashing or flickering (>3 times/second)

### Touch & Mobile
- [ ] Min 44x44px touch targets
- [ ] Safe area awareness (notches, home indicators)
- [ ] No hover-only interactions
- [ ] Adequate spacing between clickables

### Forms
- [ ] All inputs have associated labels
- [ ] Validation errors inline and specific ("Email required", not "Error")
- [ ] Success confirmations clear
- [ ] Loading states visible

### Screen Reader
- [ ] Test with NVDA or VoiceOver
- [ ] Headings provide structure (h1 > h2 > h3)
- [ ] Link text descriptive (not "click here")
- [ ] Tables have proper `<th>` scope

---

## Performance Targets

| Metric | Target | Why |
|--------|--------|-----|
| **LCP** (Largest Contentful Paint) | < 2.5s | Hero image loads quickly |
| **CLS** (Cumulative Layout Shift) | < 0.1 | No jank during scroll |
| **FID** (First Input Delay) | < 100ms | Buttons feel responsive |
| **TTFB** (Time to First Byte) | < 500ms | Server fast enough |

### Optimization Strategies

**Fonts**:
- Variable fonts (single file for all weights)
- `font-display: swap` for fast text rendering
- Preload critical fonts in `<head>`

**Images**:
- WebP with PNG fallback
- Responsive images (`srcset`) for different viewports
- Lazy-load images below fold

**CSS & JS**:
- Inline critical CSS
- Defer non-critical CSS
- Tree-shake unused Tailwind (production build)

**Animations**:
- GPU-accelerated only (`transform`, `opacity`)
- Avoid layout-triggering properties (`width`, `height`, `position`)
- RequestAnimationFrame for smooth 60fps

---

## Design Tokens (CSS Variables)

```css
/* Colors */
--color-brand-dark: #0F172A;
--color-brand-surface: #1a232e;
--color-brand-accent: #A78BFA;
--color-brand-cyan: #0ea5e9;
--color-text-primary: #f8fafc;
--color-text-muted: #94a3b8;
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;

/* Spacing (8px unit) */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;

/* Breakpoints */
--bp-mobile: 320px;
--bp-tablet: 641px;
--bp-desktop: 1025px;

/* Timing */
--duration-micro: 150ms;
--duration-short: 300ms;
--duration-medium: 500ms;
```

---

## Content Writing Guidelines

### Tone
- **Direct**, **specific**, **active voice**
- Not: Sales-y, buzzword-heavy, apologetic
- Yes: Clear outcome, actionable, empowering

### Headlines
✓ "Your AI job assistant that actually works"  
✗ "Best job search solution"

### CTAs
✓ "Get Early Access →"  
✗ "Submit"

### Form Labels
✓ "Where should we send updates?"  
✗ "Email"

### Error Messages
✓ "Email required"  
✗ "ERROR: Invalid input"

### Success Messages
✓ "Thanks! Check your inbox."  
✗ "Success"

---

## Implementation Checklist

- [ ] All buttons use `<Button>` component (3 variants)
- [ ] All form inputs use `<FormInput>` component
- [ ] All interactive elements have focus states (ring 2px)
- [ ] Color tokens used consistently (no hardcoded hex)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Images have alt text (or `aria-hidden` if decorative)
- [ ] Forms have `<label>` elements
- [ ] Error messages inline and specific
- [ ] Touch targets min 44x44px on mobile
- [ ] Breakpoint strategy respected (mobile-first)
- [ ] Performance metrics < targets
- [ ] Lighthouse accessibility score ≥ 95

---

## Resources

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — Full system reference
- [tailwind.config.mjs](./tailwind.config.mjs) — Token definitions
- [src/components/Button.astro](./src/components/Button.astro) — Button component
- [src/components/FormInput.astro](./src/components/FormInput.astro) — Form input component

---

## Quick Links

- **GitHub**: https://github.com/beltagyy/job-digest-demo
- **Live**: http://localhost:4321/job-digest-demo
- **Stack**: Astro + Tailwind CSS + IBM Plex Mono + Inter

---

This guide ensures **100x better design** through disciplined, intentional choices grounded in the PRO MAX framework.
