import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  integrations: [],
  vite: {
    plugins: [],
  },
  buildOptions: {
    site: 'https://your-site.com'
  }
});

// @ts-check
