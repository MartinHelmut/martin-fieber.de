"use strict";

module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: ["html"],
  ignorePatterns: ["src/_includes"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    hljs: "readonly",
  },
};
