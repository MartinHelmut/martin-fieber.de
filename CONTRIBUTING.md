# Contributing

You want do something for this repo? Nice and easy! And of course: you are the best! 🚀

## Contents

* [Working in the code](#working-in-the-code)
    * [Environment](#environment)
    * [Setup](#setup)
    * [Tests](#tests)
    * [Format check](#format-check)
    * [Commit changes](#commit-changes)
    * [Recommended workflow for release](#recommended-workflow-for-release)
* [Be Nice](#be-nice)

---

## Working in the code

If you want to contribute code, please:

* Follow the same [coding style](#format-check) as used in the project.
* Add an automated test that verifies your code change like described in the [Tests chapter](#tests).
* Write [good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), explain what your patch does, and why it is needed. How to is described in the [Commit changes chapter](#commit-changes).
* Keep it simple: Any patch that changes a lot of code or is difficult to understand should be discussed before you put in the effort.

Once you have tried the above, create a GitHub pull request with your changes changes and feel awesome 🎉.

### Environment

Tested with Node 8 and NPM 5 and up. Also this site uses [gatsby static site generator][gburl].

### Setup

Clone the repo and run an install:

```shell
$ git clone git@github.com:MartinHelmut/martin-fieber.de.git && cd martin-fieber.de && npm install
```

After installation completed you can use the following command to start the development server:

```shell
npm run develop
```

### Tests

Tests are written in [Jest][jturl]. To run all tests execute

```shell
$ npm test
```

and to lint the code (JavaScript and CSS):

```shell
$ npm run lint
```

### Format check

You can also run a prettier verification for all JS files in all packages with:

```shell
$ npm run fmt:check
```

This will list changes that would be made on commit (commit hook is installed with husky).

### Commit changes

**This repo is is Commitizen-friendly!** ([read more][czcli])

Checkout a new branch, e.g.:

```shell
$ git checkout -b task/do-something
```

**There is no specific naming convention for branches.**

Add your changes and run `npm run commit` to start the commitizen cli to create a proper commit message.

Create a "Pull Request" on Github and be awesome! 😎

### Recommended workflow for release

1. Make changes
2. Commit those changes with `npm run commit`
3. Make sure all tests turn green with `npm test`
4. Push your changes!

[Netlify][nturl] will run `npm run build` and publish automatically after push.

For more information on building a release see [https://github.com/conventional-changelog/standard-version][svurl]

## Be Nice

Please follow the defined [code of conduct](CODE_OF_CONDUCT.md).

[lnurl]: https://github.com/lerna/lerna
[czcli]: http://commitizen.github.io/cz-cli/
[svurl]: https://github.com/conventional-changelog/standard-version
[jturl]: https://facebook.github.io/jest/
[gburl]: https://www.gatsbyjs.org/
[nturl]: https://www.netlify.com/
