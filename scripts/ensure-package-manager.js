"use strict";

if (
  process.env.SKIP_PNPM_CHECK !== "true" &&
  !process.env.npm_config_user_agent.startsWith("pnpm/")
) {
  console.log(
    "\x1b[31m%s\x1b[0m",
    "Error: Use `pnpm` to install dependencies in this repository\n"
  );
  process.exit(1);
}
