# Contributing

You want do something for this repo? Nice and easy! And of course: you are the best!

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
- Add an automated test that verifies your code change like described in the [Tests chapter](#tests).
- Write [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), explain what your patch does, and why it is needed. How to is described in the [Commit changes chapter](#commit-changes).
- Keep it simple: Any patch that changes a lot of code or is difficult to understand should be discussed before you put in the effort.

Once you have tried the above, create a GitHub pull request with your changes changes and feel awesome 🎉.

### Environment

Tested with Node 10.

### Setup

Clone the repo and run an install:

```shell script
git clone git@github.com:MartinHelmut/martin-fieber.de.git && cd martin-fieber.de && yarn
```

### Build

To create a production build of the application:

```shell script
yarn build
```

### Tests

Tests are written in [Jest][jturl]. To run all tests execute

```shell script
yarn test
```

and to lint all the code:

```shell script
yarn lint
```

### Format check

You can also run a prettier verification for all JS files in all packages with:

```shell script
yarn format:check
```

This will list changes that would be made on commit (commit hook is installed with husky).

### Commit changes

**This repo is is Commitizen-friendly!** ([read more][czcli])

Checkout a new branch, e.g.:

```shell script
git checkout -b task/do-something
```

**There is no specific naming convention for branches.**

Add your changes and run `yarn commit` to start the commitizen cli to create a proper commit message.

Create a "Pull Request" on Github and be awesome! 😎

## Recommended workflow for release

1.  Make changes
2.  Commit those changes with `yarn commit`
3.  Make sure all tests turn green
4.  Create a new release with `yarn release`
5.  Push your release `git push --follow-tags origin master`
6.  **Done!**

For more information on building a release see [https://github.com/conventional-changelog/standard-version][sv]

## Be Nice

Please follow the defined [code of conduct](CODE_OF_CONDUCT.md).

[czcli]: http://commitizen.github.io/cz-cli/
[svurl]: https://github.com/conventional-changelog/standard-version
[jturl]: https://facebook.github.io/jest/
