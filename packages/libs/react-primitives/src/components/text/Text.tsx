import React from "react"

import {is} from "rambda"
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

const defaultStyles: {[key: string]: Partial<TextProps>} = {
  h1: {fontSize: 24, fontWeight: 400},
  h2: {
    fontSize: 18,
    fontWeight: 600,
  },
  h3: {
    fontSize: 16,
    fontWeight: 600,
  },
  p: {
    fontSize: 16,
    fontWeight: 400,
  },
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({as, color = "text.primary", fontSize = 16, ...props}: TextProps, ref) => {
    // cast as to string to satisfy the TS compiler
    const transformer: string = is(String, as) ? (as as string) : "p"
    const styles = is(String, as)
      ? defaultStyles[transformer]
      : defaultStyles["p"]
    return (
      <TextStyled
        ref={ref}
        as={as}
        color={color}
        fontSize={fontSize}
        {...styles}
        {...props}
      />
    )
  },
)
