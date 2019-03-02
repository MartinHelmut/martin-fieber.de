"use strict";

module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "lcov"],
  modulePathIgnorePatterns: ["/.next/", "/public/"],
  reporters: ["jest-dot-reporter"],
  verbose: false
};
