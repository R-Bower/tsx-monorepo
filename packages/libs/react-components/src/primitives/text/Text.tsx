import React, {HTMLAttributes} from "react"

import {is} from "rambda"
import styled from "styled-components"

import {
  COMMON,
  INTERACTIVITY,
  shouldForwardProp,
  sx,
  SystemCommonProps,
  SystemInteractivityProps,
  SystemTypographyProps,
  TYPOGRAPHY,
} from "@rb/react-style-system"

import {textStyles} from "./styles"

export interface TextProps
  extends SystemCommonProps,
    SystemInteractivityProps,
    SystemTypographyProps,
    Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {
  as: React.ElementType
  variant?: string
}

const TextStyled = styled.p.withConfig({shouldForwardProp})<TextProps>`
  ${COMMON};
  ${INTERACTIVITY};
  ${TYPOGRAPHY};
  ${sx};
`

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({as, variant = "", ...props}: TextProps, ref) => {
    // apply styles from mapped value (`as` or `variant`).  This keeps text styles consistent.
    const tag = variant || as
    const transformer: string = is(String, tag) ? (tag as string) : "p"
    // cast as to string to satisfy the TS compiler
    const styles = is(String, tag)
      ? textStyles[transformer]
      : textStyles["span"]

    return <TextStyled ref={ref} as={as} {...styles} {...props} />
  },
)

Text.defaultProps = {
  color: "text.primary",
}
