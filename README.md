# Frontier Manual

Text-first editorial site for frontier AI and technology — built with [Astro](https://astro.build), MDX content, and [Pagefind](https://pagefind.app/) search. Deploys to [Vercel](https://vercel.com) as a static site.

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Publish content

Add MDX files under `src/content/articles/` with frontmatter (`type`: `brief` | `research-note` | `essay` | `field-map`). See existing articles for copy-pasteable examples.

## Build & search index

```bash
npm run build
npm run preview
```

`postbuild` runs Pagefind against `dist/` so `/search` works in production.

## Deploy on Vercel

1. Import this repo in Vercel (framework preset: **Astro**).
2. Set environment variable `SITE_URL` to your production URL (e.g. `https://your-site.vercel.app`).
3. Optional: `PLAUSIBLE_DOMAIN`, `NEWSLETTER_EMBED_URL`.
4. Deploy. No extra adapter required — static output in `dist/`.

`vercel.json` sets `outputDirectory` to `dist` and uses the default Astro build.

## Configuration

- `src/config/site.ts` — publication name, tagline, nav, contact
- `src/data/topics.ts` — topic hub copy and reading paths
- `.env.example` — environment variable reference

Spec: `build.md`
