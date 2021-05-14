import React from "react"
import styled from "styled-components"
import {ResponsiveValue, system} from "styled-system"

import {Text, TextProps} from "@rb/react-primitives"

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

const SystemTextTruncate = styled(Text)`
  ${textTruncateProp};
`

export interface TruncatedTextProps extends TextProps {
  maxLines: number[]
}

interface StyledTextTruncateProps extends TruncatedTextProps {
  lineClamp?: ResponsiveValue<number[]>
}

const StyledTruncatedText = styled(SystemTextTruncate).withConfig({
  shouldForwardProp: (prop: keyof StyledTextTruncateProps) =>
    prop !== "lineClamp",
})<StyledTextTruncateProps>`
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

export const TruncatedText = React.forwardRef(
  ({maxLines, ...props}: TruncatedTextProps, ref) => {
    return <StyledTruncatedText ref={ref} lineClamp={maxLines} {...props} />
  },
)
