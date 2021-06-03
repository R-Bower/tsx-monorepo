import React, {HTMLAttributes} from "react"

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
  variant: string
}

/*
 * `styled.p` will be overwritten by whichever string is passed in to the
 * `as` prop of this component.
 */
const TextStyled = styled.p.withConfig({shouldForwardProp})<TextProps>`
  ${COMMON};
  ${INTERACTIVITY};
  ${TYPOGRAPHY};
  ${sx};
`

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({as, className, variant = "", ...props}: TextProps, ref) => {
    // apply styles from `variant` prop.  This keeps text styles consistent.
    const styles = textStyles[variant || "span"]
    return (
      <TextStyled
        ref={ref}
        as={as || variant}
        className={className}
        {...styles}
        {...props}
      />
    )
  },
)

Text.defaultProps = {
  color: "text.primary",
}
