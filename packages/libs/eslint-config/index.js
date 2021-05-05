module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  globals: {
    JSX: true,
  },
  ignorePatterns: ["node_modules"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "sort-keys-fix",
    "testing-library",
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-var-requires": "off",
    curly: "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
          ["unknown"],
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "external",
            pattern: "@rb/**",
            position: "after",
          },
          {
            group: "internal",
            pattern: "~*/**",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "no-const-assign": "error",
    "no-duplicate-imports": "error",
    "no-invalid-this": "error",
    "no-undef": "error",
    "no-unused-vars": "off",
    "prettier/prettier": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "always",
      },
    ],
    "react/jsx-key": "error",
    "react/jsx-sort-props": [
      "error",
      {
        reservedFirst: ["key", "ref"],
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-array-index-key": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "sort-keys-fix/sort-keys-fix": ["error", "asc", {natural: true}],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
}
