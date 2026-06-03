import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://frontiermanual.com',
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
