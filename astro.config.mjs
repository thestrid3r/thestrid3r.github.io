import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ankitkumar.dev', // Replace with your GitHub Pages URL
  base: '/', // If your site is in a subdirectory, set this to '/subdirectory/'
  integrations: [mdx(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
}); 