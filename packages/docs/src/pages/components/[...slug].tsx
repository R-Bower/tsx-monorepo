import React from "react"

import {MDXProvider} from "@mdx-js/react"
import MDX from "@mdx-js/runtime"
import fm from "front-matter"
import fs from "fs"
import humps from "humps"
import path from "path"
import {last} from "rambda"

import {Flex} from "@rb/react-primitives"

import {pagePadding} from "~components/layout/config"
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
      <Flex flexDirection={"column"} {...pagePadding}>
        <MDXProvider components={MDXComponents}>
          <MDX>{code}</MDX>
        </MDXProvider>
      </Flex>
    </>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const componentName = humps.pascalize(last(slug))
  const mdxSource = path.join(
    process.cwd(),
    "../libs/react-components/src/components",
    ...slug,
    `${componentName}.mdx`,
  )
  const parsedMdx = fm(fs.readFileSync(mdxSource, "utf-8").toString())
  return {props: {code: parsedMdx.body, frontmatter: parsedMdx.frontmatter}}
}
