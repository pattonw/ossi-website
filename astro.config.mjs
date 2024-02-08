import { defineConfig } from "astro/config";
import { cjsInterop } from "vite-plugin-cjs-interop";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://janeliascicomp.github.io",
  base: "/ossi-website",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react(),
  ],
  vite: {
    plugins: [
      cjsInterop({
        dependencies: ["@mui/utils"],
      }),
    ],
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
