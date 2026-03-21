// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.eis-uk.com',
  trailingSlash: 'never',
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  }
});