import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

export type ButtonProps = CommonSystemProps

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

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps | ComponentProps<typeof ButtonStyled>
>((props: ButtonProps, ref) => {
  return <ButtonStyled ref={ref} {...props} />
})

Button.defaultProps = {
  cursor: "pointer",
}
export default Button
