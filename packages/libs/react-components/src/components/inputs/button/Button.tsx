import React, {ButtonHTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  CommonSystemProps,
  shouldForwardProp,
} from "@rb/react-primitives"

export interface ButtonProps
  extends CommonSystemProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {}

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
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return <ButtonStyled ref={ref} {...props} />
  },
)

Button.defaultProps = {
  cursor: "pointer",
}
