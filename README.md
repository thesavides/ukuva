# Ukuva

Marketing site for **Ukuva**, a personal executive activation service. _ukuva_ means "to listen" in isiXhosa. Listen. Then do.

Static, hand-authored HTML/CSS/JS. No build step.

## Structure

```
public/              <- the live site (Cloudflare Pages build output dir)
  index.html         home
  approach.html      the Approach inner page (sticky sub-nav)
  assets/            shared CSS, JS, SVG logos
  _headers           Cloudflare security + cache headers
design/              design explorations (NOT deployed)
  Ukuva - Hero Directions.html, design-canvas.jsx, heroes/
docs/                briefs + brand source (NOT deployed)
wrangler.toml        Cloudflare Pages config (pages_build_output_dir = public)
CLAUDE.md            project memory / copy + brand rules
```

Only `public/` is served. `design/` and `docs/` are version-controlled but excluded from the live site.

## Local preview

```bash
npx serve public        # or: python3 -m http.server -d public 8080
```

## Deploy (Cloudflare Pages, Git-connected)

The repo is connected to a Cloudflare Pages project. Every push to the production
branch triggers an automatic build and deploy.

Cloudflare Pages project settings:

- **Build command:** _(none)_
- **Build output directory:** `public`
- **Root directory:** `/`

To deploy: commit and push. Cloudflare picks it up.

Manual / one-off deploy from the CLI (optional):

```bash
npx wrangler pages deploy public --project-name ukuva
```
