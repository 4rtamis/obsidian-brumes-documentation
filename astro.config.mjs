import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Brumes",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      social: {
        github: "https://github.com/4rtamis/obsidian-brumes",
      },
      sidebar: [
        {
          label: "Start Here",
          autogenerate: {
            directory: "start-here",
          },
        },
        {
          label: "Features",
          autogenerate: {
            directory: "features",
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
