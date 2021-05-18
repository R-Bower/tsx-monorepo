import React, {InputHTMLAttributes} from "react"

import styled from "styled-components"

import {systemTextProps} from "../../system/customProps"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {CommonSystemProps, SystemTextProps} from "../../types/props"

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
  ${systemTextProps};
  ${commonSystemProps};
  outline: none;
  line-height: normal;
`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />
  },
)

Input.displayName = "Input"
