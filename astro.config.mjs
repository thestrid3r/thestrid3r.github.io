import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ankitkumar.github.io', // Your GitHub Pages URL
  base: '/personal_website/', // Your repository name
  integrations: [mdx(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
}); 