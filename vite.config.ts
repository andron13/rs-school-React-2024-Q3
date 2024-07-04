import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "§", replacement: resolve(__dirname, "./src/") },
      { find: "§entities", replacement: resolve(__dirname, "./src/entities") },
      { find: "§features", replacement: resolve(__dirname, "./src/features") },
      { find: "§widgets", replacement: resolve(__dirname, "./src/widgets") },
      { find: "§shared", replacement: resolve(__dirname, "./src/shared") },
    ],
  },
});
