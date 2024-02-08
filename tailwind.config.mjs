import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#f5b3c7",
  600: "#c30069",
  900: "#5e0631",
  950: "#410e23",
};
const gray = {
  100: "#f7f5ff",
  200: "#efeaff",
  300: "#c4bddb",
  400: "#9081b9",
  500: "#5d4d82",
  700: "#3d2d5f",
  800: "#2c1b4b",
  900: "#1a1429",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
