import React, {ButtonHTMLAttributes} from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

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
  ${commonSystemProps};
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return <ButtonStyled ref={ref} {...props} />
  },
)

Button.defaultProps = {
  cursor: "pointer",
}
export default Button
