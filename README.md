# Personal Website

A modern, responsive personal website built with Astro, showcasing my professional experience, skills, and projects.

## Features

- Modern, responsive design
- Dark/Light mode support
- SEO optimized
- Fast performance
- Contact form
- CV request functionality
- Social media integration

## Tech Stack

- [Astro](https://astro.build) - Modern static site builder
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MDX](https://mdxjs.com) - Markdown with JSX support
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript

## Project Structure

```
.
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Astro pages
│   ├── styles/        # Global styles
│   ├── config/        # Site configuration
│   └── content/       # MDX content
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow:
- Builds the site
- Deploys to GitHub Pages
- Runs on every push to main branch

## License

MIT 