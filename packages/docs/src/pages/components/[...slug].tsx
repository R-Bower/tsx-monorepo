import React from "react"

import fs from "fs"
import humps from "humps"
import {MDXRemote} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
import path from "path"
import {last} from "rambda"

import MDXPageWrapper from "~components/mdx/MDXPageWrapper"

export default function ComponentsPage({source}): JSX.Element {
  return (
    <MDXPageWrapper>
      <MDXRemote {...source} />
    </MDXPageWrapper>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const componentName = humps.pascalize(last(slug))
  const mdxFilePath = path.join(
    process.cwd(),
    "../libs/react-components/src/components",
    ...slug,
    `${componentName}.mdx`,
  )
  const mdx = fs.readFileSync(mdxFilePath, "utf-8").toString()
  const mdxSource = await serialize(mdx)
  return {props: {source: mdxSource}}
}
