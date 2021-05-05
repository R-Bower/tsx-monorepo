import styled from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  ISharedSystemProps,
  sharedSystemProps,
  shouldForwardProp,
} from "../system/shared"

interface IInputProps extends ISharedSystemProps, TypographyProps {}

const Input = styled.input.withConfig({
  shouldForwardProp,
})<IInputProps>`
  ${typography};
  ${sharedSystemProps};
  outline: none;
  // Safari placeholder centering fix
  box-sizing: border-box;
  line-height: normal;
`

export default Input
