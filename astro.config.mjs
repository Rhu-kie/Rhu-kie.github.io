// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rhu-kie.github.io',
  markdown: {
    // Design spec calls for no syntax highlighting, ink tints only via our
    // own CSS. Shiki's default theme applies inline styles (dark background,
    // rainbow tokens) that override the site's palette, so it's disabled.
    syntaxHighlight: false,
  },
});
