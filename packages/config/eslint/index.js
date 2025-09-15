module.exports = {
    extends: ["turbo", "prettier", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
      node: true,
      browser: true,
      es2020: true,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: ["./tsconfig.json", "./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
    ignorePatterns: ["node_modules/", "dist/", ".next/", "out/"],
  };