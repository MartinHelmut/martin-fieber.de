"use strict";

module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["jsx-a11y", "import"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
