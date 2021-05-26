import React from "react"

import fs from "fs"
import humps from "humps"
import {GetStaticPaths, GetStaticProps} from "next"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
import path from "path"
import {init, is, last, pipe, split, tail} from "rambda"

import MDXPageWrapper from "~components/mdx/MDXPageWrapper"

import compileDocs from "../../../scripts/compile-mdx-docs"

interface ComponentsPageProps {
  source: MDXRemoteSerializeResult
}

export default function ComponentsPage({
  source,
}: ComponentsPageProps): JSX.Element {
  return (
    <MDXPageWrapper>
      <MDXRemote {...source} />
    </MDXPageWrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const reactComponents = path.resolve(
    process.cwd(),
    "../libs/react-components",
  )
  // the docs compiler returns an array of component file paths.
  const paths = compileDocs([reactComponents]).map((current) => {
    // split at the src
    const shortPath = current.substring(current.indexOf("src"))
    // split by path separator and exclude the fileName.mdx
    const hierarchy = pipe(split("/"), (path) => tail(path))(shortPath)
    // format to expected url
    return `/components/${init(hierarchy).join("/")}`
  })
  return {fallback: false, paths}
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.debug(context)
  const slug = context.params.slug
  const componentName = humps.pascalize(
    is(String, slug) ? slug : last(slug as string[]),
  )
  const mdxFilePath = path.join(
    process.cwd(),
    "../libs/react-components/src",
    ...slug,
    `${componentName}.mdx`,
  )
  const mdx = fs.readFileSync(mdxFilePath, "utf-8").toString()
  const mdxSource = await serialize(mdx)
  return {props: {source: mdxSource}}
}
