import React from "react"

import styled from "styled-components"
import {ResponsiveValue, system} from "styled-system"

import {Text, TextProps} from "../../primitives/text/Text"

const textTruncateProp = system({
  lineClamp: {
    // this needs to be -webkit-line-clamp in order for the css to apply.
    // @ts-ignore
    property: "-webkit-line-clamp",
    transform: (value: number) => {
      return value.toString()
    },
  },
})

interface TruncatedTextProps extends TextProps {
  lineClamp?: ResponsiveValue<number>
}

const StyledTruncatedText = styled(Text).withConfig({
  shouldForwardProp: (prop: keyof TruncatedTextProps) => prop !== "lineClamp",
})<TruncatedTextProps>`
  ${textTruncateProp};
  display: none;

  @supports (-webkit-line-clamp: 1) {
    visibility: visible;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    * {
      display: inline;
    }
  }
`

export const TruncatedText = React.forwardRef<
  HTMLParagraphElement,
  TruncatedTextProps
>(
  (
    {as, color = "text.primary", lineClamp, ...props}: TruncatedTextProps,
    ref,
  ) => {
    return (
      <StyledTruncatedText
        ref={ref}
        as={as}
        color={color}
        lineClamp={lineClamp}
        {...props}
      />
    )
  },
)
