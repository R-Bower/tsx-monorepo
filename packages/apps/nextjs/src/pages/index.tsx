import React from "react"

import {NextSeo} from "next-seo"

import HomePage from "../routes/home/HomePage"

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        description={"Big monorepo"}
        title={"Ryan Bower - Full Stack Web Developer"}
      />
      <HomePage />
    </>
  )
}
