module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "tailwind.config.js", "tsconfig.app.json"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier", "react-compiler", "@typescript-eslint", "import", "simple-import-sort"],
  rules: {
    "react-compiler/react-compiler": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "error",
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
