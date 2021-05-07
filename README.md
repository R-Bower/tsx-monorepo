## TSX-monorepo

<!--suppress HtmlDeprecatedAttribute -->
<div align="center">

This project is a collection of tools, apps, and libraries intended for supporting React development.

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

### NextJS Development
- Currently WIP.
- run `yarn next-dev`.  Executes `yarn run dev --parallel --stream` which does the following:
  - starts `@rb/nextjs-template` in dev mode using `next dev`
  - runs `@rb/react-primitives` and `@rb/react-components` in watch mode which triggers a recompile on change.

### Projects

- Standalone Front End applications are located within `packages/apps`.
- Shared libraries and utilities are located within `packages/libs`.
- Data fetching APIs and libraries are located within `packages/apis`.
    - Note: it's perfectly fine for isolated apps to include their own data fetching apis within their respective package folders.
  
### Conventions
- Every package must contain at least the following:
  - a `package.json` file.
  - a `src` folder with code specific to the package's library or framework.
  - a `tsconfig.json` (TypeScript projects only).
- Within a TypeScript project, it's recommended that path aliasing be setup such that local packages start with `~`.
  - The base ESLint configuration is set up to split import groups based on external, internal, and sibling/parent/child.  A 4th grouping is configured for apps-specific internal files.  This is done for organizational purposes, as it's much easier to distinguish at a glance the origins of the imported code.
  - Ex for a project with `src/components` and `src/pages` folder:
  ```typescript jsx
  // src/components/simple-div/SimpleDiv.tsx
  import React from "react"
  
  export default function SimpleDiv(): JSX.Element {
    return <div />
  }
  ```
  ```typescript jsx
  // src/pages/about.tsx
  import React from "react"
  
  import SimpleDiv from "~components/simple-div/SimpleDiv.tsx"
  
  import {localUtilityFunc} from "./utils"
  
  export default function AboutPage(): JSX.Element {
    return <SimpleDiv />
  }
  ```

## References

See the following blog posts. This guy is pretty good. I used his monorepo as a base for this repository:

- [How to set up a TypeScript monorepo and make Go to definition work](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
- [Making TypeScript monorepos play nice with other tools](https://medium.com/@NiGhTTraX/making-typescript-monorepos-play-nice-with-other-tools-a8d197fdc680)

