# @rb/monorepo-docs

A NextJS application featuring MDX components. This application serves as the documentation for this monorepo.

### How it works

- `.mdx` files located in adjacent packages* are compiled and linked at the file level. Their contents are serialized and served
  using [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) and [@mdx-js/react](https://www.npmjs.com/package/@mdx-js/react).
  - *MDX files must have a frontmatter configuration at the top of the file in order to be included in these docs.  Frontmatter is a set of key/value pairs in a markdown file that can be used to provide additional data.  Refer to the `example.mdx` file in the root of this docs package for instructions and required fields.
  - Each package must implement a `docs.config.json` at the root of the package.  This file contains additional configuration information like the group id for the package as well as the order of each subgroup within the sidebar search.
- Our MDX pages are wrapped with an [MDXProvider](https://mdxjs.com/getting-started#mdxprovider) which provides default styles for most markdown elements. This process is documented [here](https://mdxjs.com/table-of-components).
- Every component exported from `libs/react-style-system` and `libs/react-components` is provided to this MDXProvider. This gives developers the ability to use our custom components in any MDX context.
  - The goal here was to enable developers to quickly build documentation alongside each component by obviating the need to resolve imports within each MDX file. The downside is that it comes at the cost of including every component in the MDXProvider, resulting in slightly longer initial load times (worst case, an extra second or two is added). 
  - We can take steps to resolve these imports dynamically, but `Next` doesn't make this easy.  This isn't a huge concern for now.
    
  
### Interactive docs
- State tracking with `next-mdx-remote` is tricky. We're using the [mdx-observable](https://github.com/alexkrolick/mdx-observable) package to provide our docs with state to facilitate interactivity.  
- TODO: Examples

### Adding new packages
- TODO: Ryan to add to readme.  Please contact Ryan if you want to add a new package.  
