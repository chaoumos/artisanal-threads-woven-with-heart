import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://artisanal-threads-woven-with-heart.example.com'
});