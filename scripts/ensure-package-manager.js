"use strict";

if (!process.env.npm_config_user_agent.startsWith("yarn/")) {
  console.log(
    "\x1b[31m%s\x1b[0m",
    "Error: Use `yarn` to install dependencies in this repository\n"
  );
  process.exit(1);
}
