import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

interface IInputProps extends ISharedSystemProps, TypographyProps {}

export const Input = styled.input.withConfig({
  shouldForwardProp,
})<IInputProps>`
  ${typography};
  ${commonSystemProps};
  outline: none;
  // Safari placeholder centering fix
  box-sizing: border-box;
  line-height: normal;
`
