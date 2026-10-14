// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import releases from './src/data/release-metadata.json' with { type: 'json' };

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cliptate.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({
    i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en', ja: 'ja', ko: 'ko', de: 'de' } },
    serialize(item) {
      const path = new URL(item.url).pathname.replace(/^\/(en|ja|ko|de)\//, '/');
      if (path.startsWith('/changelog/')) {
        const release = releases.find(({ tag }) => path === `/changelog/${tag}/`);
        item.lastmod = release?.updated ?? releases.reduce((latest, { updated }) => updated > latest ? updated : latest, '');
      }
      const fallback = item.links?.find((link) => link.lang === 'zh-CN');
      if (fallback) item.links?.push({ lang: 'x-default', url: fallback.url });
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
