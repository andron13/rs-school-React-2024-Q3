module.exports = {
  root: true,
  env: { browser: true, es2020: true , jest: true},
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js", "tsconfig.app.json", "jest.config.ts", "vite.config.ts"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-refresh",
    "react-compiler",
    "jest",
    "prettier",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
  ],
  rules: {
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "jest/no-mocks-import": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true,
        },
      },
    ],
  },
};
