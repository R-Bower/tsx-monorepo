import React from "react"

import styled, {css} from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {CustomTextProps} from "../../system/customProps"
import {
  commonSystemProps,
  CommonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface TextProps
  extends CommonSystemProps,
    TypographyProps,
    CustomTextProps {
  as: React.ElementType
}

const textProps = css`
  ${typography};
  ${commonSystemProps};
`

const TextStyled = styled.p.withConfig({shouldForwardProp})<TextProps>`
  ${textProps};
`

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props: TextProps, ref) => {
    return <TextStyled ref={ref} {...props} />
  },
)

Text.defaultProps = {
  fontSize: "16px",
  fontWeight: 300,
  letterSpacing: "normal",
}

export default Text
