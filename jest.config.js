"use strict";

module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "lcov"],
  modulePathIgnorePatterns: ["/.next/", "/out/"],
  reporters: ["jest-progress-bar-reporter"],
  verbose: false
};
