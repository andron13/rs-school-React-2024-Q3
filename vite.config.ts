/* eslint-disable */
// @ts-nocheck
/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/

import { resolve } from "path";

import react from "@vitejs/plugin-react";
import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "§", replacement: resolve(__dirname, "./src/") }],
  },
  test: {
    globals: true,
    environment: "happy-dom", //"happy-dom" or 'jsdom'
    setupFiles: ["./src/test/setup.ts"],
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8", // or 'istanbul'
      exclude: [
        "**/tailwind.config.js/**",
        "**/postcss.config.js/**",
        "**/./src/test/setup.ts/**",
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        functions: 80,
        branches: 80,
        "**/index.ts": {
          statements: 80,
          functions: 80,
          branches: 80,
          lines: 80,
        },
      },
    },
    css: false,
  },
});
