module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "plugin:import/warnings",
  ],
  ignorePatterns: [
    "!**/.server",
    "!**/.client",
    "dist",
    "vite.config.ts",
    "delete"
  ],
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
    "react/no-unknown-property": "off",
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
      "warn",
      {
        allowConstantExport: true
      }
    ],
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "alphabetize": {
          order: "asc",
          caseInsensitive: true
        }
      }
    ]
  },
  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended"
      ],
      settings: {
        react: {
          version: "detect"
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" }
        ],
        "import/resolver": {
          typescript: {}
        }
      }
    },

    // TypeScript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"]
          },
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript"
      ]
    },

    // Node
    {
      files: [".eslintrc.cjs"],
      env: {
        node: true
      }
    }
  ]
};

