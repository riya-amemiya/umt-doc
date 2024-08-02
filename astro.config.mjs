import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://umt-main.oshaburikitchin.com/",
  compressHTML: true,
  integrations: [mdx(), tailwind(), sitemap(), partytown()],
  output: "server",
  adapter: vercel({ isr: true }),
  security: {
    checkOrigin: true,
  },
});
