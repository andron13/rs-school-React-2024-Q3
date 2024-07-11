/* eslint-disable */
// @ts-nocheck
import { resolve } from "path";

import react from "@vitejs/plugin-react";
import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "§", replacement: resolve(__dirname, "./src/") }],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
    exclude: [...configDefaults.exclude],
    coverage: {
      exclude: [
        "**/tailwind.config.js/**",
        "**/postcss.config.js/**",
        "**/setupTests.ts/**",
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
  },
});
