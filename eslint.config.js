import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import html from "eslint-plugin-html";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["src/_includes", "_site", "src/scripts/*.min.js"],
  },
  {
    plugins: { html },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.amd,
        hljs: "readonly",
      },
    },
  },
];
