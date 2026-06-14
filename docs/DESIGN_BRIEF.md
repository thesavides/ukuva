# Ukuva Consulting — Website Design Brief

**For:** the design team
**From:** Chris Savides
**Purpose:** Give you a working reference for the navigation patterns and front-end system we built on a sister site (Keystone IQ), so you can reuse what works and design Ukuva Consulting with your own creative direction on top of it.

---

## 1. How to use this document

This is a **reference, not a prescription.** The structural patterns below (navigation behaviour, layout scaffolding, the component set, the spacing/scale system) are proven and we'd like Ukuva to inherit that *skeleton*. The **look** — typography, colour, imagery, tone, motion, density — is yours to define for the Ukuva brand.

A simple way to split it:

| Inherit (the system) | Make your own (the brand) |
|----------------------|---------------------------|
| Navigation architecture & behaviour | **Typography (must differ — see §2)** |
| Layout grid, spacing scale, breakpoints | Colour palette |
| Component inventory (buttons, cards, eyebrows, tables, accordions…) | Imagery / illustration style |
| Dark/light theming mechanism | Voice, copy, density, mood |
| Sticky sub-nav, breadcrumb logic | Motion / interaction polish |

The starter stylesheet in §7 is a clean, de-branded version of our token + component CSS. Drop it into a sandbox (CodePen / a static HTML page) to *see* the styles, then re-skin freely.

---

## 2. ⚠️ Fonts must be different

Keystone IQ uses **Playfair Display** (display serif) + **Hind** (body sans). **Do not reuse these for Ukuva.** The two brands should not look related typographically.

The starter stylesheet ships with neutral placeholder fonts and `TODO` markers. Please choose an Ukuva type pairing — one display/heading face and one body face. (Examples of *different* directions, purely to illustrate the kind of pairing, not a recommendation: a geometric sans like Work Sans/Inter paired with a contemporary serif like Fraunces or GT Sectra; or an all-sans system for a more modern, less editorial feel.) Whatever you pick, wire it into the two CSS variables `--font-sans` and `--font-serif` and everything else cascades.

---

## 3. Navigation architecture

This is the part we most want to carry over — it tested well and keeps a content-heavy site easy to move around.

### 3.1 Fixed top header
- **Fixed to the top of the viewport**, 64px tall, full width, with a translucent background + `backdrop-filter: blur()` so content scrolls softly underneath. The page body gets `padding-top: 64px` to clear it.
- Layout: **logo left, primary nav right**, with a small "utilities" cluster (a CTA button, a theme toggle, a reserved language-selector slot) at the far right.
- On scroll the header can pick up a subtle shadow/solidify (`.scrolled` state) — optional polish.

### 3.2 Primary nav + dropdowns
- Top-level items, a couple with **dropdown sub-menus** on hover/focus (desktop).
- A single high-emphasis **CTA button** ("Get in touch" equivalent) lives in the nav, visually distinct from the text links.

### 3.3 Section sub-nav (sticky) — the key pattern
- On any page that belongs to a *section* (e.g. an "About" cluster with Methodology / Evidence / Founder, or an "Insights" cluster), we render a **horizontal sub-nav of sibling pages** directly under the header.
- It is **`position: sticky; top: 64px`** — it scrolls up with the page then **pins just beneath the fixed header**, so the user can jump between sibling sections without scrolling back to the top. It has its own opaque/frosted background so content doesn't bleed through when pinned.
- The current page's tab is highlighted (accent-coloured underline).
- On mobile the tabs stay on one row and **scroll horizontally** rather than wrapping.

### 3.4 One nav row rule (breadcrumbs vs sub-nav)
- We never stack two navigation rows. A page shows **either** a section sub-nav (if it's part of a cluster) **or** a breadcrumb trail (on standalone leaf pages like Contact / legal / blog posts) — never both. Keep this discipline; it keeps the top of every page calm.

### 3.5 Mobile navigation
- Below the breakpoint, the primary nav collapses to a **hamburger toggle** that opens a **full-screen overlay**: full-width, left-aligned rows; dropdown children render as static indented lists (no hover menus on touch).

### 3.6 Footer
- A footer nav (mirroring/expanding the main nav), a small set of social links, and a legal/copyright line with privacy + terms links.

---

## 4. The design system at a glance

All values are CSS custom properties on `:root` (see §7 for the full block). Re-theming = editing these variables.

- **Colour:** a small token set — one deep background, a panel background, a light surface, text + muted-text inks, borders, and **one accent colour** used consistently for emphasis/CTAs/links. *(Keystone's accent is a burnt orange `#d95322` — replace with Ukuva's brand colour.)*
- **Typography scale:** a modular step scale from `--text-xs` (0.75rem) to `--text-5xl` (3rem), plus three line-height tokens. Headings use the display face; body uses the sans.
- **Spacing scale:** a single numeric spacing ramp (`--space-1` … `--space-32`) used for all margins/padding/gaps. Consistency here is what makes the whole thing feel coherent.
- **Layout:** max-width containers (`--max-width: 1200px` and narrower reading widths), centred.
- **Radius / transition:** small radius tokens and one shared transition timing.

---

## 5. Component inventory

The pieces below already exist and are reused across the site. Treat this as the kit to re-skin:

- **Buttons** — `.btn` with `--primary` (accent fill) and `--outline` variants. Squared, uppercase, wide letter-spacing. *(You may absolutely soften these — e.g. rounded, sentence-case — for Ukuva.)*
- **Eyebrow** — a small, wide-tracked uppercase label that sits above headings to signal section/context.
- **Cards** —
  - *Service / "what we do" cards*: numbered, with title, subtitle, body, and a "learn more" link.
  - *Segment & stat cards*: compact fact/figure blocks.
  - *Lifecycle cards*: 3-up cards walking a process (we use Entry / Hold / Exit).
  - *Article/insight cards*: for index/listing pages.
- **Pull-quote** — large serif blockquote for emphasis lines.
- **Feature list** — bullet list styled with a short accent dash instead of a disc.
- **Comparison table** — multi-column table for "us vs the alternatives", horizontally scrollable on mobile.
- **FAQ accordion** — collapsible Q&A with a `+` toggle; can carry FAQ schema for SEO.
- **Hero** — page hero with eyebrow + H1 + subline + action buttons; a thin top rule.

---

## 6. Behaviours worth keeping

- **Dark / light theming.** The site ships dark by default with a header toggle; light mode is a set of token overrides under an `html[data-theme="light"]` selector (the colour variables flip, components inherit). State is saved in `localStorage` and applied before paint to avoid a flash. *Decide whether Ukuva needs both modes — but if it does, this token-flip approach is clean.*
- **Sticky section sub-nav** (see §3.3).
- **Responsive breakpoints.** We work mobile-up with a few key max-width breakpoints (~600 / ~700 / ~860 / ~900px) where grids collapse to single column and the nav switches to the overlay.
- **Cache-busting.** Stylesheet/JS are versioned by file-modified-time so edits always reach the browser. (Implementation detail for whoever builds it.)

---

## 7. Starter stylesheet (de-branded reference)

Drop this into a sandbox to see the system. **Fonts and the accent colour are placeholders — replace for Ukuva.** Everything keys off the variables in `:root`.

```css
/* ==========================================================================
   Ukuva Consulting — starter tokens & components
   Derived from a proven system. Re-skin freely; the structure is the value.
   ========================================================================== */

:root {
    /* --- COLOUR (replace accent + tune to Ukuva brand) --- */
    --color-bg:           #0a0603;            /* page background (deep) */
    --color-bg-panel:     #130c08;            /* raised/panel background */
    --color-bg-light:     #f3ece5;            /* light band background */
    --color-surface:      rgba(255,255,255,0.03);
    --color-border:       rgba(255,255,255,0.08);
    --color-text:         #f4ede6;            /* body text */
    --color-text-muted:   #d0c2b6;            /* secondary text */
    --color-heading:      #f4ede6;
    --color-accent:       #d95322;            /* TODO: Ukuva brand accent */
    --color-accent-deep:  #bc4316;
    --color-accent-hover: #e35b27;

    /* --- TYPOGRAPHY (TODO: choose Ukuva faces — must differ from Keystone) --- */
    --font-sans:  system-ui, -apple-system, Arial, sans-serif;   /* TODO: Ukuva body sans */
    --font-serif: Georgia, 'Times New Roman', serif;             /* TODO: Ukuva display face */

    --text-xs:   0.75rem;
    --text-sm:   0.875rem;
    --text-base: 1rem;
    --text-lg:   1.125rem;
    --text-xl:   1.25rem;
    --text-2xl:  1.5rem;
    --text-3xl:  1.875rem;
    --text-4xl:  2.25rem;
    --text-5xl:  3rem;

    --leading-tight:  1.2;
    --leading-snug:   1.375;
    --leading-normal: 1.6;

    /* --- SPACING (single ramp used everywhere) --- */
    --space-1:  0.25rem;  --space-2:  0.5rem;   --space-3:  0.75rem;
    --space-4:  1rem;     --space-5:  1.25rem;  --space-6:  1.5rem;
    --space-8:  2rem;     --space-10: 2.5rem;   --space-12: 3rem;
    --space-16: 4rem;     --space-20: 5rem;     --space-24: 6rem;  --space-32: 8rem;

    /* --- LAYOUT / RADIUS / MOTION --- */
    --max-width:    1200px;
    --max-width-md: 800px;
    --max-width-sm: 640px;
    --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px;
    --transition: 200ms ease;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    color: var(--color-text);
    background: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    padding-top: 64px;            /* clears the fixed header */
}

/* --- FIXED HEADER --- */
.site-header {
    position: fixed; inset: 0 0 auto; z-index: 100; height: 64px;
    display: flex; align-items: center;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

/* --- STICKY SECTION SUB-NAV (the signature pattern) --- */
.sub-nav { border-bottom: 1px solid var(--color-border); }
.sub-nav--top {
    position: sticky; top: 64px; z-index: 90;   /* pins under the fixed header */
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    background: rgba(10,6,3,0.92);              /* opaque so content doesn't bleed through */
}
.sub-nav__inner { display: flex; gap: var(--space-8); max-width: 1280px; margin-inline: auto; }
.sub-nav__inner a {
    padding-block: var(--space-5);
    font-size: var(--text-base); font-weight: 600;
    color: var(--color-text-muted);
    border-bottom: 2px solid transparent; text-decoration: none;
    transition: color var(--transition), border-color var(--transition);
}
.sub-nav__inner a:hover,
.sub-nav__inner a.is-current { color: var(--color-text); border-bottom-color: var(--color-accent); }
@media (max-width: 900px) {        /* tabs scroll on one row instead of wrapping */
    .sub-nav__inner { flex-wrap: nowrap; overflow-x: auto; }
    .sub-nav__inner a { white-space: nowrap; flex: 0 0 auto; }
}

/* --- EYEBROW --- */
.eyebrow {
    display: block; margin-bottom: 1rem;
    font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(244,237,230,0.72);
}
.eyebrow--accent { color: var(--color-accent); }

/* --- BUTTONS --- */
.btn {
    display: inline-flex; align-items: center; gap: var(--space-2);
    padding: 0.7rem 1.5rem; border-radius: 0;          /* squared — soften if you like */
    font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600;
    letter-spacing: 0.06em; text-transform: uppercase;
    border: 1.5px solid transparent; cursor: pointer; text-decoration: none;
    transition: background var(--transition), color var(--transition), border-color var(--transition);
}
.btn--primary { background: var(--color-accent); color: #fff; }
.btn--primary:hover { background: var(--color-accent-deep); }
.btn--outline { background: transparent; color: var(--color-text); border-color: var(--color-border); }
.btn--outline:hover { border-color: var(--color-accent); color: var(--color-accent); }

/* --- FEATURE LIST (accent dash instead of a bullet) --- */
.feature-list { list-style: none; display: flex; flex-direction: column; gap: var(--space-3); }
.feature-list li { position: relative; padding-left: var(--space-6); color: var(--color-text-muted); line-height: 1.8; }
.feature-list li::before {
    content: ''; position: absolute; left: 0; top: 0.6em;
    width: 12px; height: 2px; background: var(--color-accent);
}

/* --- CARD (e.g. service / "what we do") --- */
.card {
    padding: var(--space-8) var(--space-6) var(--space-6);
    background: var(--color-surface);
    border: 1px solid var(--color-border); border-top: 3px solid var(--color-accent);
    transition: transform var(--transition), background var(--transition), border-color var(--transition);
}
.card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.045); border-color: rgba(217,83,34,0.35); }

/* --- PULL QUOTE --- */
.pull-quote {
    font-family: var(--font-serif); font-size: var(--text-2xl); line-height: 1.3;
    color: var(--color-text); border-left: 3px solid var(--color-accent);
    padding-left: var(--space-5); margin-block: var(--space-8);
}

/* --- LIGHT MODE (optional): flip the tokens, components follow --- */
html[data-theme="light"] {
    --color-bg: #ffffff;
    --color-bg-panel: #f3ece5;
    --color-text: #1a1208;
    --color-text-muted: #5a4d43;
    --color-border: rgba(0,0,0,0.12);
}
html[data-theme="light"] .sub-nav--top { background: rgba(255,255,255,0.92); }
```

---

## 8. Implementation context (for whoever builds it)

The reference site is a **custom theme** where the layout lives in templates and the **copy is editable** through structured fields in the CMS (so non-developers can edit text without touching code, while the layout stays locked). You don't need to match the platform — but the principle is worth keeping for Ukuva: **fix the layout, expose the content.** Whatever stack you choose (static site, headless CMS, WordPress, Webflow…), aim for that separation.

---

## 9. What I need back from you

1. An **Ukuva type pairing** (different from Keystone) wired into `--font-sans` / `--font-serif`.
2. An **Ukuva colour direction** (at minimum: background tone + one accent).
3. Your take on **light/dark** (both, or one).
4. A first pass at **home + one inner page** showing the nav, a hero, the sub-nav pattern, and 2–3 of the components re-skinned, so we can react to direction early.

Creative direction is genuinely open — this doc just hands you a working chassis so you're not rebuilding the plumbing.
