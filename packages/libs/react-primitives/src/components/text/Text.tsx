import React from "react"

import {is} from "rambda"
import styled, {css} from "styled-components"
import {TypographyProps} from "styled-system"

import {systemTextProps} from "../../system/customProps"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {CommonSystemProps, SystemTextProps} from "../../types/props"

export interface TextProps
  extends Omit<CommonSystemProps, "children">,
    TypographyProps,
    SystemTextProps {
  as: React.ElementType
  children: React.ReactNode
  variant?: string
}

const textProps = css`
  ${commonSystemProps};
  ${systemTextProps};
`

const TextStyled = styled.p.withConfig({shouldForwardProp})<TextProps>`
  ${textProps};
`

const defaultStyles: {[key: string]: Partial<TextProps>} = {
  h1: {fontSize: 32, fontWeight: 600, lineHeight: "48px"},
  h2: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "36px",
  },
  h3: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
  },
  p: {
    fontSize: [12, 12, 14, 16],
    fontWeight: 400,
    lineHeight: ["16px", "16px", "20px", "24px"],
  },
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({as, color = "text.primary", variant = "", ...props}: TextProps, ref) => {
    // apply styles from mapped value from `as` or `variant`.  This keeps text styles consistent.
    const tag = variant || as
    const transformer: string = is(String, tag) ? (tag as string) : "p"
    // cast as to string to satisfy the TS compiler
    const styles = is(String, tag)
      ? defaultStyles[transformer]
      : defaultStyles["p"]
    return <TextStyled ref={ref} as={as} color={color} {...styles} {...props} />
  },
)
