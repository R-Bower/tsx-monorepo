import React from "react"

import {MDXProvider} from "@mdx-js/react"
import MDX from "@mdx-js/runtime"
import fs from "fs"
import matter from "gray-matter"
import humps from "humps"
import path from "path"
import {last} from "rambda"

import {MDXComponents} from "~components/mdx/MDXComponents"
import {MDXSource} from "~components/mdx/props"

/*
 * A dynamic component that resolves the .mdx files in libs/react-components/src with the
 * name matching the current route's pathname.  Conflicts result in errors.
 */
export default function ThemePage({code, frontmatter}: MDXSource): JSX.Element {
  console.debug(frontmatter)
  return (
    <>
      <MDXProvider components={MDXComponents}>
        <MDX>{code}</MDX>
      </MDXProvider>
    </>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const componentName = humps.pascalize(last(slug))
  const mdxSource = path.join(
    process.cwd(),
    "../libs/react-components/src",
    ...slug,
    `${componentName}.docs.mdx`,
  )
  const parsedMdx = matter(fs.readFileSync(mdxSource, "utf-8").toString())
  return {props: {code: parsedMdx.content, frontmatter: parsedMdx.data}}
}
