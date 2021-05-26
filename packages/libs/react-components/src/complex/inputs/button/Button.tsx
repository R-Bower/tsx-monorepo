import React, {ButtonHTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  FLEX,
  INTERACTIVITY,
  TYPOGRAPHY,
  shouldForwardProp,
  sx,
  SystemCommonProps,
  SystemFlexProps,
  SystemInteractivityProps,
  SystemTypographyProps,
} from "@rb/react-style-system"

import {buttonVariants} from "./styles"

export interface ButtonProps
  extends SystemCommonProps,
    SystemFlexProps,
    SystemInteractivityProps,
    SystemTypographyProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: keyof typeof buttonVariants
}

const ButtonStyled = styled.button.withConfig({
  shouldForwardProp,
})<ButtonProps>`
  &:active {
    outline: none;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  will-change: transform;
  ${COMMON};
  ${FLEX};
  ${INTERACTIVITY};
  ${TYPOGRAPHY};
  ${sx};
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, ...props}: ButtonProps, ref) => {
    const variantStyle = buttonVariants[variant] || {}
    return <ButtonStyled ref={ref} {...variantStyle} {...props} />
  },
)

Button.defaultProps = {
  cursor: "pointer",
  display: "flex",
}
