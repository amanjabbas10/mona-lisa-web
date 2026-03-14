import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use the repo subpath on GitHub Pages; keep dev at `/`.
  base:
    command === "build" || process.env.npm_lifecycle_event === "preview"
      ? "/mona-lisa-web/"
      : "/",
  plugins: [react()],
}));
