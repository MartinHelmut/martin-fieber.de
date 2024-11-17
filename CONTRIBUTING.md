# Contributing

You want to do something for this repo? Nice and easy! And of course: you are the best!

## Issues

### General

If you report a bug, please try to:

- Perform a web / GitHub search to avoid creating a duplicate ticket.
- Include enough information to reproduce the problem.
- Mention the exact version of the project causing you problems, as well as any related software and versions (such as operating system, browser, etc.).
- Test against the latest version of the project (and if possible also the master branch) to see if the problem has already been fixed.

Once you have tried the above, create a GitHub issue notifying your bug report.

## Working in the code

If you want to contribute code, please:

- Follow the same [coding style](#format-check) as used in the project.
- Write [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), explain what your patch does, and why it is needed.
- Keep it simple: Any patch that changes a lot of code or is difficult to understand should be discussed before you put in the effort.

Once you have tried the above, create a GitHub pull request with your changes and feel awesome 🎉.

### Environment

Tested with Node 20.

### Dependencies

- [Node.js](https://nodejs.org) 20 or higher
- [PNPM](https://pnpm.io) 9 or higher

### Setup

Clone the repo and run install:

```shell script
git clone git@github.com:MartinHelmut/martin-fieber.de.git && \
  cd martin-fieber.de && \
  pnpm install
```

### Lint

To lint the code:

```shell script
pnpm lint
```

### Format check

You can also run a prettier:

```shell script
pnpm format:check
```

### Compress scripts

To create compressed versions of the available scripts run:

```shell script
pnpm compress
```

## Be Nice

Please follow the defined [code of conduct](CODE_OF_CONDUCT.md).
