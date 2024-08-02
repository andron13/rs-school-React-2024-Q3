module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "next/core-web-vitals"
],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js", "tsconfig.pages.json-delete", "vite.config.ts", "setup.ts", "delete"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-refresh",
    "react-compiler",
    "prettier",
    "@typescript-eslint",
    "import",
    "simple-import-sort"
  ],
  rules: {
    'react/no-unknown-property': 'off',
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "jest/no-mocks-import": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true }
    ],
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
};
