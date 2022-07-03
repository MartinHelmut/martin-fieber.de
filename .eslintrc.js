"use strict";

module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier"],
  plugins: ["html"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    hljs: "readonly",
  },
};
