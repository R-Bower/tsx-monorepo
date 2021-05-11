import React from "react"

import styled, {css} from "styled-components"
import {TypographyProps} from "styled-system"

import {systemTextProps, SystemTextProps} from "../../system/customProps"
import {
  commonSystemProps,
  CommonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface TextProps
  extends CommonSystemProps,
    TypographyProps,
    SystemTextProps {
  as: React.ElementType
}

const textProps = css`
  ${commonSystemProps};
  ${systemTextProps};
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
