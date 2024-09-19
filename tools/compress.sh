#!/bin/bash
set -e

# Find installed Node scripts
export PATH="$PATH:node_modules/.bin"

# Compress Theme Toggle
terser --compress --mangle --output src/scripts/theme-toggle.min.js \
  -- src/scripts/theme-toggle.js

# Compress Image Compare
rm -f src/scripts/image-compare.min.js && \
  cat src/scripts/body-lock-scroll.js src/scripts/image-compare.js > src/scripts/image-compare.min.js && \
  terser --compress --mangle --output src/scripts/image-compare.min.js \
    -- src/scripts/image-compare.min.js
