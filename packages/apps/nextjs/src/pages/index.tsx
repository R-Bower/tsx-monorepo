import React from "react"

import {NextSeo} from "next-seo"

import HomePage from "../routes/home/HomePage"

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        description={"Ryan Bower - Full Stack Web Developer"}
        title={"Rarely Ryan"}
      />
      <HomePage />
    </>
  )
}
