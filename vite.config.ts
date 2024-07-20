/* eslint-disable */
// @ts-nocheck
/// <reference types="vitest" />
/// <reference types="vite/client" />
// https://vitejs.dev/config/

import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { ignore } from "./.testignore";
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
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts"],
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8", // or 'istanbul'
      exclude: [...coverageConfigDefaults.exclude, ...ignore],
      thresholds: {
        statements: 80,
        branches: 80,
        "**/**/index.ts": {
          statements: 0,
          functions: 0,
          branches: 0,
          lines: 0,
        },
      },
    },
    css: false,
  },
});
