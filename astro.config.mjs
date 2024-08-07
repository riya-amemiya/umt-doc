import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import starlight from "@astrojs/starlight";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import starlightBlog from "starlight-blog";

// https://astro.build/config
export default defineConfig({
  site: "https://umt-doc.oshaburikitchin.com/",
  compressHTML: true,
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [remarkBreaks, remarkMath],
  },
  integrations: [
    starlight({
      plugins: [starlightBlog()],
      title: "UMT Documentation",
      social: {
        github: "https://github.com/riya-amemiya/umt-doc",
      },
    }),
    mdx(),
    tailwind(),
    partytown(),
  ],
  output: "server",
  adapter: vercel({
    isr: true,
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  security: {
    checkOrigin: true,
  },
  prefetch: {
    prefetchAll: true,
  },
});
