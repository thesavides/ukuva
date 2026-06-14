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

## Deploy (Cloudflare Worker + Static Assets, Git-connected)

The repo is connected to a Cloudflare **Worker** (Workers Static Assets) via Git
builds. Every push to `main` runs `npx wrangler deploy`, which uploads `public/`
and serves it directly. There is no Worker script: it is an assets-only Worker,
configured in `wrangler.toml` (`[assets] directory = "./public"`).

Cloudflare build configuration (dashboard → Worker → Settings → Build):

- **Build command:** _(none)_
- **Deploy command:** `npx wrangler deploy`
- **Root directory:** `/`
- **Production branch:** `main`

To deploy: commit and push. Cloudflare picks it up.

Validate the config locally without deploying:

```bash
npx wrangler deploy --dry-run
```

Manual / one-off deploy from the CLI (needs `npx wrangler login`):

```bash
npx wrangler deploy
```
