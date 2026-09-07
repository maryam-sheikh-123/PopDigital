// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/',
  build: {
    format: 'directory',
    assets: 'assets'
  },
  integrations: [tailwind()]
});


