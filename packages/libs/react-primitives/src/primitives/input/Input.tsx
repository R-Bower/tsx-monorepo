import React, {InputHTMLAttributes} from "react"

import styled from "styled-components"

import {TEXT} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"
import {CommonSystemProps, SystemTextProps} from "../../system/types"

export interface InputProps
  extends CommonSystemProps,
    SystemTextProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "color" | "height" | "size" | "width"
    > {}

const InputStyled = styled.input.withConfig({
  shouldForwardProp,
})<InputProps>`
  ${TEXT};
  ${sx};
  outline: none;
  line-height: normal;
`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />
  },
)

Input.displayName = "Input"
