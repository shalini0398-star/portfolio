import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on Netlify, Vercel AND GitHub Pages (sub-path hosting)
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    minify: "esbuild",      // minify JavaScript
    cssMinify: true,        // minify CSS
    sourcemap: false,
    rollupOptions: {
      output: {
        // keep React in its own long-cached chunk
        manualChunks: { react: ["react", "react-dom"] },
      },
    },
  },
});
