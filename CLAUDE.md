# Ukuva: project memory

## Copy & grammar rules (always apply)
- **Never use em dashes (—) anywhere.** Not in body copy, headings, titles, captions, code comments, or `&mdash;` entities. Rephrase with standard punctuation instead: a comma, period, colon, or "but"/"and". Two independent clauses get a period, not a dash.
- **Never start a sentence with "And" or "But"** (or "So", "Yet" used the same loose way). Join the clauses with a comma, or rephrase. Use only common, standard English grammar and punctuation.
- No comma splices. No sentence fragments used as full sentences where a clause is cleaner.
- Hyphens in compound words (once-off, full-time, end-to-end, 30-min) are fine. Only the em dash is banned.

## Brand
- Logo: "ukuva" wordmark where the orange "a" doubles as an elephant head (biggest ears in Africa). Assets in `assets/` (`ukuva_wordmark.svg`, `ukuva_mark.svg`, `ukuva_wordmark_white.svg`).
- Palette: deep blue `#006FA3`, orange `#FF5C1E` (CTAs/accent), neutral gray `#A1A2A5`. Light/editorial theme on warm paper.
- Type: Schibsted Grotesk (headings/body), Newsreader italic (pull-quotes / isiXhosa definition), IBM Plex Mono (eyebrows, pricing, tags).
- Positioning: personal executive *activation*, NOT consulting. Tagline "Listen. Then do." (ukuva = "to listen" in isiXhosa). Founder: Christopher Savides, Amsterdam. Email chris@ukuva.com.

## Engagement model
- Phase 1: free 30-min discovery call.
- Phase 2: **fixed, once-off engagement fee** (from €5,000, non-refundable). Can involve travelling to the client directly OR further video consults. Produces the Operational Readiness Blueprint, which the client keeps.
- Phase 3 (optional): execution, quoted per engagement.
- Max 3 active clients at a time.

## Files & structure
- Live site lives in `public/` (the only thing Cloudflare Pages serves): `public/index.html` (landing), `public/approach.html` (inner page with sticky sub-nav), shared `public/assets/ukuva.css` + `public/assets/ukuva.js`.
- `design/`: design explorations, not deployed (`design-canvas.jsx`, `Ukuva - Hero Directions.html` 3-hero canvas, `heroes/`).
- `docs/`: briefs + brand source PDFs, not deployed.
- Hosting: Cloudflare Pages, Git-connected, build output dir `public` (see `wrangler.toml` + `README.md`). No build step.
- Use clean filenames and root-relative-ish links (`index.html`, `approach.html`); never reintroduce the old `Ukuva-Home.html` / `Ukuva-Approach.html` names.
