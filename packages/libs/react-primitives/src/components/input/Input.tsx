import React, {InputHTMLAttributes} from "react"

import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface InputProps
  extends CommonSystemProps,
    TypographyProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "color" | "height" | "size" | "width"
    > {}

const InputStyled = styled.input.withConfig({
  shouldForwardProp,
})<InputProps>`
  ${typography};
  ${commonSystemProps};
  outline: none;
  // Safari placeholder centering fix
  box-sizing: border-box;
  line-height: normal;
`

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />
  },
)

export default Input
