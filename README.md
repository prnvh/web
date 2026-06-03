# Frontier Manual

A static editorial publication on frontier AI—built with Astro, MDX, and Pagefind.

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ + search index
npm run preview
```

## Publishing

Add MDX files under `src/content/articles/` with frontmatter (`type`: `brief` | `research-note` | `essay` | `field-map`). Routes are generated automatically.

## Hero images

Reference mockups live in the repo root. Run `py scripts/crop-heroes.py` (requires Pillow) to refresh crops in `public/images/`.

## Deploy

Configured for Vercel static output. Set `site` in `astro.config.mjs` to your production URL.
