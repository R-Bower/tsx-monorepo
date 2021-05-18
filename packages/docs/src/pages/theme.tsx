import React from "react"

import {MDXProvider} from "@mdx-js/react"
import MDX from "@mdx-js/runtime"
import fs from "fs"
import matter from "gray-matter"
import path from "path"

import {MDXComponents} from "~components/mdx/MDXComponents"
import {MDXSource} from "~components/mdx/props"

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
  const mdxSource = path.join(process.cwd(), "src/content/test.mdx")
  const parsedMdx = matter(fs.readFileSync(mdxSource, "utf-8").toString())

  console.debug(parsedMdx)
  return {props: {code: parsedMdx.content, frontmatter: parsedMdx.data}}
}
