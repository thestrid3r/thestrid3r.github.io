import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thestrid3r.github.io', // Your GitHub Pages URL
  base: '/', // Root path for GitHub Pages
  integrations: [mdx(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
}); 