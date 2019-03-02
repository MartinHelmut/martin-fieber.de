"use strict";

module.exports = {
  collectCoverage: true,
  coverageReporters: ["text"],
  modulePathIgnorePatterns: ["/.next/", "/public/"],
  reporters: ["jest-dot-reporter"],
  verbose: false
};
