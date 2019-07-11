"use strict";

module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "lcov"],
  modulePathIgnorePatterns: ["/.next/", "/out/"],
  reporters: ["jest-dot-reporter"],
  verbose: false
};
