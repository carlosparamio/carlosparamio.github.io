import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://carlosparamio.com',
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
