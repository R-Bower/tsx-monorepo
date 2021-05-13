import React from "react"

import styled from "styled-components"
import {system} from "styled-system"

import {Text, TextProps} from "@rb/react-primitives"

const textTruncateProp = system({
  lineClamp: {
    // this needs to be -webkit-line-clamp in order for the css to apply.
    // @ts-ignore
    property: "-webkit-line-clamp",
  },
})

const SystemTextTruncate = styled(Text)`
  ${textTruncateProp};
`

const StyledTruncatedText = styled(SystemTextTruncate)`
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

export interface TruncatedTextProps extends TextProps {
  maxLines: string[]
}

export function TruncatedText({
  maxLines,
  ...props
}: TruncatedTextProps): JSX.Element {
  return <StyledTruncatedText lineClamp={maxLines} {...props} />
}
