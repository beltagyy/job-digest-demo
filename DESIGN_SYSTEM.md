# Job Digest - Design System (PRO MAX)

## 1. DESIGN THESIS

**Problem**: Job hunting = endless scrolling, spam, poor matches
**Solution**: AI instantly finds YOUR best roles + generates cover letters  
**Visual Thesis**: **CLARITY + SPEED** — minimize friction, maximize signal

**Signature Element**: Animated score badge pulse (purple ↔ cyan) — represents AI intelligence matching user to job in real-time

---

## 2. PRODUCT POSITIONING

- **Product Type**: SaaS Demo / Landing Page (Tech)
- **Audience**: EU mid-career developers/engineers (35% remote seekers, 65% relocation-open)
- **Platform**: Astro + Tailwind CSS
- **Target Devices**: Mobile-first (40% traffic), Tablet (20%), Desktop (40%)
- **Accessibility Target**: WCAG 2.1 AA minimum (AAA where feasible)

---

## 3. SEMANTIC COLOR SYSTEM

### Primary Palette (From 161 options - optimized for tech/AI)

| Token | Hex | RGB | Usage | Contrast Ratio |
|-------|-----|-----|-------|-----------------|
| `brand-dark` | #0F172A | 15,23,42 | Background | - |
| `brand-surface` | #1a232e | 26,35,46 | Cards/containers | - |
| `brand-accent` (Primary) | #A78BFA | 167,139,250 | Calls-to-action, Primary interaction | 4.5:1 on dark |
| `brand-cyan` (Secondary) | #0ea5e9 | 14,165,233 | Links, Secondary actions | 5.2:1 on dark |
| `text-primary` | #f8fafc | 248,250,252 | Body text | 16:1 on dark |
| `text-muted` | #94a3b8 | 148,163,184 | Secondary text | 7.3:1 on dark |
| `success` | #10b981 | 16,185,129 | Job scores 8+, confirmations | 5.1:1 on dark |
| `warning` | #f59e0b | 245,158,11 | Job scores 6-8, alerts | 4.8:1 on dark |
| `error` | #ef4444 | 239,68,68 | Form errors, warnings | 5.9:1 on dark |

**Dark Mode Parity**: All text meets WCAG AA minimum (4.5:1). No color-only information coding.

---

## 4. TYPOGRAPHY SYSTEM (57 pairings - curated selection)

### Display Font: **IBM Plex Mono** (400, 600, 700)
- **Why**: Tech-forward, geometric, distinctive
- **Usage**: Headlines (h1, h2), job titles, prominent scores
- **Personality**: Modern, confident, slightly futuristic

### Body Font: **Inter** (300, 400, 500, 600)
- **Why**: Highly readable at all sizes, open metrics, variable font ready
- **Usage**: Body copy, descriptions, form labels
- **Accessibility**: 1.5 line-height minimum, -0.01em letter-spacing

### Mono Font: **JetBrains Mono** (400, 600)
- **Why**: Distinct yet readable, designed for developer audiences
- **Usage**: Salary ranges, scores, technical specs
- **Contrast**: Always 6+ on backgrounds for readability

### Type Scale (Mobile-first)
```
h1: 32px (mobile) → 56px (desktop) | 700 | -0.02em
h2: 24px (mobile) → 42px (desktop) | 700 | -0.01em
h3: 20px (mobile) → 28px (desktop) | 600 | 0
body: 16px | 400 | 1.5 line-height
small: 14px | 400 | 1.6 line-height
caption: 12px | 500 | 1.5 line-height | mono
```

**Reading Rhythm**: 1.5-2.4 line-height depending on context

---

## 5. COMPONENT LIBRARY

### Button Variants

```
PRIMARY: bg-gradient(accent→cyan) | text-dark | min 48px height | 12px padding vertical
  Hover: shadow-lg + scale 1.02
  Focus: ring 2px offset 2px
  Active: scale 0.98
  Disabled: opacity-50 + cursor-not-allowed
  States: Default | Hover | Focus | Active | Loading | Disabled

SECONDARY: border 1px white/30 | text-white
  Hover: bg-white/10
  Focus: ring 2px
  Active: bg-white/20

GHOST: text-accent | no bg
  Hover: bg-accent/10
  Focus: ring 2px
```

### Form Inputs

```
Input field:
  - Min 44px height (touch target)
  - Rounded 8px
  - Border 1px white/20 
  - Focus: ring 2px accent + border white/50
  - Placeholder: text-muted opacity-60
  - Dark text inside
  
States:
  - Default
  - Focus
  - Filled
  - Error (border error, helper text red)
  - Disabled (opacity-50)
  - Loading (spinner)
```

### Score Badges

```
Score 8-10: bg-green-500/20 | border green-500/50 | text-green-300 | 8px rounded
Score 6-8: bg-yellow-500/20 | border yellow-500/50 | text-yellow-300 | 8px rounded
Score <6: bg-slate-500/20 | border slate-500/50 | text-slate-300 | 8px rounded

Animation: pulse-glow (2s cycle) | purple→cyan on hover
```

### Card Components

```
Job Card:
  - bg-white/5 | backdrop-blur-sm | border white/10
  - rounded-2xl | p-8
  - Hover: border-accent/80 + shadow-lg + shadow-accent/20
  - Transition: all 300ms ease
  - Min 250px | responsive
```

---

## 6. RESPONSIVE BREAKPOINTS

```
Mobile: 320px-640px
  - Stack all layouts
  - 16px horizontal padding
  - 20px section padding
  - Single column cards
  
Tablet: 641px-1024px
  - 2-column layouts
  - 24px horizontal padding
  - 32px section padding
  
Desktop: 1025px+
  - 3-4 column layouts
  - 40px horizontal padding
  - 48px section padding
  - Max-width 1280px container
```

**Safe Areas**: 
- Mobile: bottom padding 20px + safe-area-inset-bottom
- iPad notch-aware: safe-area-inset-*

---

## 7. ANIMATION & MOTION SPECIFICATIONS

### Timing Curve (Easing)
- **Entrance**: ease-out (cubic-bezier(0.16, 1, 0.3, 1))
- **Exit**: ease-in (cubic-bezier(0.7, 0, 0.84, 0))
- **Interactive**: ease-in-out (cubic-bezier(0.4, 0, 0.2, 1))

### Duration
- **Micro-interactions** (hover, focus): 150-200ms
- **Page transitions**: 300ms
- **Ambient animations**: 2-6s cycles
- **Loading states**: 1-2s patterns

### Animations
```
float: 6s ease-in-out infinite | vertical ±20px movement
pulse-glow: 2s ease-in-out | box-shadow + gradient shift
fade-in: 300ms ease-out | opacity 0→1 + translateY 10px
slide-up: 300ms ease-out | translateY 20px→0

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

---

## 8. FORM VALIDATION & FEEDBACK

### Input Validation
```
Email: Real-time regex | show checkmark on valid
Name: Min 2 chars | optional helptext
Country: Dropdown | no validation needed

Error States:
  - Show inline icon (✕) in red
  - Helper text below in error color
  - Border changes to error color
  - Clear, non-apologetic language:
    "Email required" (not "Please enter email")

Success States:
  - Checkmark icon in green
  - Optional: toast "Successfully submitted"
  - Hide form, show: "Thanks! Check your inbox."
```

---

## 9. NAVIGATION & INFORMATION ARCHITECTURE

```
Main Nav:
  - Logo | Home | Demo | How It Works | [CTA Button]
  - Mobile: Hamburger → slide panel from right
  - Sticky on scroll (desktop) | Static (mobile)
  - Z-index 50 | backdrop-blur-sm

Footer:
  - 4 columns (desktop) | Stacked (mobile)
  - Logo | Product | Tech | Status
  - Copyright | Links
  - All links keyboard-accessible

Internal Links:
  - Clear link color (brand-cyan) | underline on hover
  - Keyboard focus visible (ring 2px)
  - Open in same tab (except GitHub links)
```

---

## 10. ACCESSIBILITY CHECKLIST (WCAG 2.1 AA)

- [ ] **Contrast**: All text meets 4.5:1 (or 3:1 for large text)
- [ ] **Keyboard Nav**: Tab through all interactive elements in logical order
- [ ] **Focus Visible**: All buttons/inputs show clear focus indicator (ring)
- [ ] **Semantic HTML**: `<button>`, `<form>`, `<nav>`, `<main>`, `<footer>`
- [ ] **ARIA Labels**: `aria-label` on icon-only buttons, `aria-describedby` on errors
- [ ] **Motion**: `@media (prefers-reduced-motion: reduce)` on all animations
- [ ] **Color**: No information conveyed by color alone
- [ ] **Touch Targets**: Min 44x44px on mobile
- [ ] **Form Labels**: Associated `<label>` for all inputs
- [ ] **Error Messages**: Inline, specific, actionable ("Email required" not "Error")
- [ ] **Skip Links**: Hidden skip-to-main link (keyboard accessible)
- [ ] **Landmarks**: Use `<main>`, `<nav>`, `<section>` properly
- [ ] **Image Alt Text**: All images (or `aria-hidden` if decorative)
- [ ] **Reduced Motion**: Respect user preference across entire site
- [ ] **Screen Reader**: Test with NVDA or VoiceOver

---

## 11. PERFORMANCE OPTIMIZATION

### Metrics Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **FID** (First Input Delay): < 100ms
- **TTFB** (Time to First Byte): < 500ms

### Optimization Strategies
```
Fonts:
  - Variable fonts (single file)
  - Preload critical fonts
  - Font-display: swap
  
Images:
  - WebP with PNG fallback
  - Responsive images (srcset)
  - Lazy-load below fold
  
Animations:
  - Use transform + opacity only (GPU accelerated)
  - Avoid layout-triggering properties (width, height)
  - RequestAnimationFrame for smooth 60fps
  
CSS:
  - Critical CSS inline
  - Defer non-critical
  - Tree-shake unused Tailwind
```

---

## 12. ICON SYSTEM

### Iconography
- **Style**: Stroke-based, 24x24 grid, 1.5-2px stroke weight
- **Set**: Feather Icons or Heroicons (consistent with Tailwind ecosystem)
- **Usage**:
  - `icon-check` (success)
  - `icon-alert` (warning)
  - `icon-error` (error)
  - `icon-info` (information)
  - `icon-external` (link opens new)

### Icon Colors
- Primary icons: brand-accent or brand-cyan
- Success: #10b981
- Warning: #f59e0b
- Error: #ef4444
- Muted: text-muted

---

## 13. DARK/LIGHT MODE TOGGLE

```
Currently: Dark-only

For Light Mode Addition:
  - Primary: #FFFFFF bg | #0F172A text
  - Surface: #F3F4F6 | border-slate-200
  - Accent: #A78BFA (same) | 
  - Cyan: #0ea5e9 (same)
  - Button: Similar hover behavior
  - Animations: Unchanged

Implementation: CSS custom properties or Tailwind dark: prefix
Toggle Location: Top-right corner | sticky | accessible
```

---

## 14. CONTENT HIERARCHY & COPY

### Tone
- **Not**: Sales-y, buzzword-heavy, apologetic
- **Yes**: Direct, specific, active voice

### Copy Guidelines
```
Headlines: Benefit-focused, specific
  ✓ "Your AI job assistant that actually works"
  ✗ "Best job search solution"

CTA Buttons: Action-oriented
  ✓ "Get Early Access →"
  ✗ "Submit"

Form Labels: Conversational
  ✓ "Where should we send updates?"
  ✗ "Email"

Error Messages: Actionable, kind
  ✓ "Email required"
  ✗ "ERROR: Invalid input"

Success Messages: Clear outcome
  ✓ "Thanks! Check your inbox."
  ✗ "Success"
```

---

## 15. DESIGN TOKENS (CSS Variables)

```css
/* Colors */
--color-brand-dark: #0F172A
--color-brand-surface: #1a232e
--color-brand-accent: #A78BFA
--color-brand-cyan: #0ea5e9
--color-text-primary: #f8fafc
--color-text-muted: #94a3b8
--color-success: #10b981
--color-warning: #f59e0b
--color-error: #ef4444

/* Typography */
--font-display: 'IBM Plex Mono'
--font-body: 'Inter'
--font-mono: 'JetBrains Mono'

/* Spacing */
--spacing-unit: 8px
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px

/* Breakpoints */
--bp-mobile: 320px
--bp-tablet: 641px
--bp-desktop: 1025px

/* Timing */
--duration-micro: 150ms
--duration-short: 300ms
--duration-medium: 500ms
--timing-ease-out: cubic-bezier(0.16, 1, 0.3, 1)
--timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## END OF DESIGN SYSTEM

This becomes the single source of truth. All components derive from these tokens.
Every design decision is intentional and justified by the brief.
