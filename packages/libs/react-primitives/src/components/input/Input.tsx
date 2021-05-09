import React from "react"

import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

interface SystemInputProps extends CommonSystemProps, TypographyProps {}

const InputStyled = styled.input.withConfig({
  shouldForwardProp,
})<SystemInputProps>`
  ${typography};
  ${commonSystemProps};
  outline: none;
  // Safari placeholder centering fix
  box-sizing: border-box;
  line-height: normal;
`

export type InputProps = ComponentProps<typeof InputStyled>

const Input = React.forwardRef((props: SystemInputProps, ref) => {
  return <InputStyled ref={ref} {...props} />
})

export default Input
