import React from "react"

import styled, {css} from "styled-components"
import {TypographyProps} from "styled-system"

import {systemTextProps} from "../../system/customProps"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {CommonSystemProps, SystemTextProps} from "../../types/props"

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
