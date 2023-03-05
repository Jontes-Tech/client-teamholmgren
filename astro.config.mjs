import astroI18next from "astro-i18next";
import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://teamholmgren.com',
  integrations: [astroI18next(), tailwind(), sitemap()]
});