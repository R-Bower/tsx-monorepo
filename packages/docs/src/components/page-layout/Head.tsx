import React from "react"

import {NextSeo} from "next-seo"
import NextHead from "next/head"

export interface HeadProps {
  description: string
  title: string
}

export default function AppHead({description, title}: HeadProps): JSX.Element {
  return (
    <>
      <NextSeo description={description} title={title} />
      <NextHead>
        <link href={"https://fonts.gstatic.com"} rel={"preconnect"} />
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          }
          rel={"stylesheet"}
        />
      </NextHead>
    </>
  )
}
