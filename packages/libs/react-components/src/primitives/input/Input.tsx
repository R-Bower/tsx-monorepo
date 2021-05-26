import React, {InputHTMLAttributes} from "react"

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

export interface InputProps
  extends SystemCommonProps,
    SystemInteractivityProps,
    SystemTypographyProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "color" | "height" | "size" | "width"
    > {}

const InputStyled = styled.input.withConfig({
  shouldForwardProp,
})<InputProps>`
  ${COMMON};
  ${INTERACTIVITY};
  ${TYPOGRAPHY};
  ${sx};
`

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <InputStyled ref={ref} {...props} />
  },
)

Input.defaultProps = {
  outline: "none",
}
Input.displayName = "Input"
