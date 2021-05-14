import {NextSeo} from "next-seo"
import React from "react"
import {PropTypes, View} from "react-view"

import {TruncatedText} from "@rb/react-components"
import {Flex} from "@rb/react-primitives"

import {pagePaddingX, pagePaddingY} from "~components/page/config"
import {fontSize} from "~props/text"

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo description={"Hello"} title={"Flex"} />
      <Flex
        alignItems={"center"}
        flex={"1 0 auto"}
        flexDirection={"column"}
        {...pagePaddingX}
        {...pagePaddingY}
      >
        <View
          componentName={"TruncatedText"}
          customProps={{
            maxLines: {
              generate: (value: any) => {
                return ""
              },
              parse: (code: string, knobProps: any) => {
                return ""
              },
            },
          }}
          imports={{
            "@rb/react-components": {
              named: ["TruncatedText"],
            },
          }}
          props={{
            children: {
              description: "Text",
              type: PropTypes.ReactNode,
              value: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui ration evoluptatem sequi nesciunt.`,
            },
            fontSize,
            maxLines: {
              description: "",
              type: PropTypes.Array,
              value: `[2]`,
            },
          }}
          scope={{
            TruncatedText,
          }}
        />
      </Flex>
    </>
  )
}
