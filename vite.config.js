import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use relative asset paths so the build works on GitHub Pages (project pages)
  // without hardcoding the repo name.
  base: command === "build" ? "./" : "/",
  plugins: [react()],
}));
