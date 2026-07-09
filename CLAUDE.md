# Ukuva: project memory

## Copy & grammar rules (always apply)
- **Never use em dashes (—) anywhere.** Not in body copy, headings, titles, captions, code comments, or `&mdash;` entities. Rephrase with standard punctuation instead: a comma, period, colon, or "but"/"and". Two independent clauses get a period, not a dash.
- **Never start a sentence with "And" or "But"** (or "So", "Yet" used the same loose way). Join the clauses with a comma, or rephrase. Use only common, standard English grammar and punctuation.
- No comma splices. No sentence fragments used as full sentences where a clause is cleaner.
- Hyphens in compound words (once-off, full-time, end-to-end, 30-min) are fine. Only the em dash is banned.

## Brand
- Logo: "ukuva" wordmark where the orange "a" doubles as an elephant head (biggest ears in Africa). Assets in `assets/` (`ukuva_wordmark.svg`, `ukuva_mark.svg`, `ukuva_wordmark_white.svg`).
- Palette: deep blue `#006FA3`, orange `#FF5C1E` (CTAs/accent), neutral gray `#A1A2A5`. Light/editorial theme on warm paper.
- Type: Schibsted Grotesk (headings/body, incl. pull-quotes), IBM Plex Mono (eyebrows, pricing, tags). **No serif font** (Newsreader removed); italic emphasis is replaced with brand orange (#FF5C1E) or font-weight.
- Positioning (revised July 2026, from the "It's a Shovel" content deck): the **general contractor for your new venture**, an "idea to launch partner". Chris **plans and orchestrates** the launch of a new venture (works out what it takes, costs it, then assembles and runs the team/suppliers who build it). He does **NOT build in-house** (not a developer, not a COO, not a co-founder, not a consultant who just hands over a report). Sector-agnostic, with payments/fintech as credibility. Tagline "Listen. Then do." (ukuva = "to listen" in isiXhosa). Founder: Christopher Savides, Amsterdam. Email chris@ukuva.com.

## Engagement model (four steps)
1. Free 30-min discovery call.
2. A short scoping document (confirms we are building the same thing).
3. **The Ukuva Plan** (the productised, named deliverable, replaces the old "Operational Readiness Blueprint"): a fixed-fee planning engagement, **EUR 3,000 to EUR 5,000, half up front and half on completion**. Turns the idea into a clear, costed, executable plan. The client keeps it.
4. Optional execution: quoted per engagement; Chris assembles and runs the team/suppliers.
- No equity, ever. Remote-first from Amsterdam, travel when needed. A small number of clients at a time (no longer phrased as "max 3").
- All paid work is subject to a separate, per-client **signed consulting services agreement** (B2B contractor arrangement between Ukuva Consulting B.V. and the client, Netherlands law, advisory role, NAI arbitration in Amsterdam). It governs each engagement and takes precedence over the website; `public/terms.html` references this. Chris prepares a fresh engagement doc per client (general terms consistent). Reference draft: `docs/` (Abound consulting agreement).

## Files & structure
- Live site lives in `public/` (Cloudflare Worker Static Assets). Pages: `index.html` (home), `the-ukuva-plan.html`, `about.html` (Person schema), `faq.html` (FAQPage schema), `book.html` (Calendly inline embed), plus `privacy.html`, `terms.html`, `404.html`. Shared `public/assets/ukuva.css` + `public/assets/ukuva.js`.
- Nav/IA: The Ukuva Plan, About, FAQ, and a "Book a call" CTA that goes to `/book` (the single conversion point). The old `approach.html` is **retired**: `public/_redirects` 301s `/approach` → `/the-ukuva-plan`.
- SEO/AEO/GEO layer per the deck: per-page meta, JSON-LD (ProfessionalService on home, Person on about, FAQPage on home+faq, BreadcrumbList on inner pages), `robots.txt` allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended), `sitemap.xml`.
- Social card: `public/assets/og-image-v2.png` (source `design/og-image.svg`), mirrors the home hero.
- `design/`: explorations + og-image source, not deployed. `docs/`: briefs + brand source, not deployed.
- Hosting: Cloudflare **Worker** with Static Assets (NOT Pages), Git-connected, deploy command `npx wrangler deploy`, assets dir `public` via `[assets]` in `wrangler.toml`. No build step, no Worker script. See `README.md`.
- Use clean root-relative links (`/`, `/the-ukuva-plan`, `/about`, `/faq`, `/book`); never reintroduce the old `Ukuva-Home.html` / `Ukuva-Approach.html` names or the retired `approach.html`.
