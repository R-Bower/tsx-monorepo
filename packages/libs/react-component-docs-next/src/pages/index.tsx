import {NextSeo} from "next-seo"
import React from "react"
import {PropTypes, View} from "react-view"

import {Flex} from "@rb/react-primitives"

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        description={"Big monorepo"}
        title={"Ryan Bower - Full Stack Web Developer"}
      />
      <View
        componentName={"Flex"}
        imports={{
          "@rb/react-primitives": {
            named: ["Flex"],
          },
        }}
        props={{
          children: {
            description: "Visible label.",
            type: PropTypes.ReactNode,
            value: "Hello",
          },
          disabled: {
            description: "Indicates that the button is disabled",
            type: PropTypes.Boolean,
            value: false,
          },
          onClick: {
            description: "Function called when button is clicked.",
            type: PropTypes.Function,
            value: '() => alert("click")',
          },
        }}
        scope={{
          Flex,
        }}
      />
    </>
  )
}
