# Portfolio site

Personal cybersecurity portfolio. Built with [Astro](https://astro.build), content-driven via Markdown collections, styled to the Minimal Serif design system (Playfair Display, Inter, ivory palette, hairline rules, no shadows or rounded corners).

## Structure

- `src/pages/index.astro` — home page (hero, selected work, writeups, certifications, about, contact)
- `src/pages/work/[slug].astro` — case study detail pages, sourced from `src/content/work/*.md`
- `src/pages/writeups/[slug].astro` — long-form article pages, sourced from `src/content/writeups/*.md`
- `src/site.config.ts` — identity, hero copy, certifications, and other site-wide text
- `src/styles/global.css` — design tokens and base styles

## Adding a new work item or writeup

Add a new Markdown file to `src/content/work/` or `src/content/writeups/` following the frontmatter shape of an existing entry in that folder. The page is generated automatically, no route code needed.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
