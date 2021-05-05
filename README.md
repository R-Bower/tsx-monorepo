## Qualcomm UI (QUI)

<!--suppress HtmlDeprecatedAttribute -->
<div align="center">

This project is a collection of tools, apps, and libraries intended for supporting React application development.

</div>

----

**Table of contents**

- [Goals](#goals)
- [Setup](#setup)
- [Projects](#projects)
- [Docs](#docs)
- [Contributing](#contributing)

## Goals

- Consistent code formatting in every package.  [ESLint](https://eslint.org/docs/user-guide/getting-started) is used for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- [TypeScript](https://www.typescriptlang.org/) support.
- Hot reloading adjacent packages in the repo.
  - See `scripts/react-dev.js` for basic implementation.
- Optional publishing support.
- [Tree shaking](https://webpack.js.org/guides/tree-shaking/) for every library.
- Working "go to definition" feature in IDEs for every package.
- Testing support via Jest (still requires per-project config but this might be good enough)


## Setup
- You'll need [Node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com) to work with this repository.
  - I run Node v14+ and haven't tried any lesser versions.  Your mileage may vary if you're not on v14+.
```
yarn install
```

### Hot reloading
- Currently WIP.  The current implementation spawns terminals that use `tsc` to watch each independent workspace and recompile on change.
  - `Linux/MacOS`: to hot reload the `libs/react-*` workspaces, run `yarn react-dev-unix` at the root of this repo.
  - `Windows`: WIP

### Projects

- Standalone Front End applications are located within `packages/apps`.
- Shared libraries and utilities are located within `packages/libs`.
- Data fetching APIs and libraries are located within `packages/apis`.
    - Note: it's perfectly fine for isolated apps to include their own data fetching apis within their respective package folders.

## References

See the following blog posts. This guy is pretty good. I used his monorepo as a base for this project:

- [How to set up a TypeScript monorepo and make Go to definition work](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
- [Making TypeScript monorepos play nice with other tools](https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680)

