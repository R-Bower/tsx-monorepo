import React from "react"

import styled from "styled-components"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

const ButtonStyled = styled.button.withConfig({
  shouldForwardProp,
})<CommonSystemProps>`
  &:active {
    outline: none;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  will-change: transform;
  ${commonSystemProps};
`

export type ButtonProps = ComponentProps<typeof ButtonStyled>

const Button = React.forwardRef((props: ButtonProps, ref) => {
  return <ButtonStyled ref={ref} {...props} />
})

Button.defaultProps = {
  cursor: "pointer",
}
export default Button
