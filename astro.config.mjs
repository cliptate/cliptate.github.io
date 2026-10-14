// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cliptate.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({
    i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en', ja: 'ja', ko: 'ko', de: 'de' } },
    serialize(item) {
      const fallback = item.links?.find((link) => link.lang === 'zh-CN');
      if (fallback) item.links?.push({ lang: 'x-default', url: fallback.url });
      return item;
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
