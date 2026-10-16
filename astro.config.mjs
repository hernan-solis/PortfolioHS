import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hernansolis.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date(),
      // Design previews are noindex; keep them out of the sitemap
      filter: (page) => !page.includes('/disenos/'),
    }),
  ],
});
