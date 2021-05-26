# @rb/monorepo-docs

A NextJS application featuring MDX components. This application serves as the documentation for this monorepo.

### How it works

- `.mdx` files located in adjacent packages* are compiled and linked at the file level. Their contents are serialized and served
  using [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) and [@mdx-js/react](https://www.npmjs.com/package/@mdx-js/react).
    - Only `libs/react-components` and `libs/react-primitives` are currently supported.
    - Adding new packages is as simple as updating the aggregator script at `scripts/compile-mdx-docs.js`
- Our MDX pages are wrapped with an `MDXProvider` which provides default styles for most markdown elements. This process is documented [here](https://mdxjs.com/table-of-components).
- Every component exported from `libs/react-primitives` and `libs/react-components` is provided to this MDXProvider. This gives developers the ability to use our
  custom components in any MDX context 
  - The goal here was to enable developers to quickly build documentation alongside each component by obviating the need to resolve imports within each MDX file. The downside is that it comes at the cost of including every component in the MDXProvider, resulting in slightly longer initial load times (worst case, an extra second or two is added). 
  - We can take steps to resolve these imports dynamically, but `Next` doesn't make this easy.  For now, this is serviceable.
    
  
### Interactive docs
- State tracking with `next-mdx-remote` is tricky. We're using the [mdx-observable](https://github.com/alexkrolick/mdx-observable) package to provide our docs with state to facilitate interactivity.  
- TODO: Examples
