import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gloriadesalve.it',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it',
          en: 'en',
        },
      },
    }),
  ],
  redirects: {
    '/about.html': '/about/',
    '/contacts.html': '/contacts/',
    '/my-works.html': '/works/',
  },
});
