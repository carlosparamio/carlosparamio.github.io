import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlosparamio.com',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    server: {
      port: 4321,
      host: true,
      watch: {
        usePolling: true
      }
    }
  }
});
