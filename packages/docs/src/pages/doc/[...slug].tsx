import React from "react"

import {GetStaticPaths, GetStaticProps} from "next"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
import {is, pluck} from "rambda"

import MDXPageWrapper from "~components/mdx/MDXPageWrapper"
import sidebarDocs from "~components/page-layout/sidebar/search/components.json"
import {
  collectSidebarElements,
  findSidebarElement,
} from "~components/page-layout/sidebar/search/utils"

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
  const paths = pluck("url", collectSidebarElements(sidebarDocs)) as string[]
  return {fallback: false, paths}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug
  if (!is(Array, slug) || slug.length !== 3) {
    console.error("Error, wrong slug pattern")
    return {props: {source: ""}}
  }
  const [group, subgroup, id] = slug
  const mdx = findSidebarElement(sidebarDocs, group, subgroup, id).mdxBody
  const mdxSource = await serialize(mdx)
  return {props: {source: mdxSource}}
}
