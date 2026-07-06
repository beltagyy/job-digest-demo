import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://beltagyy.github.io/job-digest-demo',
  base: '/job-digest-demo',
});
