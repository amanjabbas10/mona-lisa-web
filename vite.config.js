import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use relative asset paths in production so the build works on GitHub Pages
  // and in local static previews without needing a specific subpath.
  base: command === "build" ? "./" : "/",
  plugins: [react()],
}));
