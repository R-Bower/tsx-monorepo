import styled from "styled-components"
import {flexbox, FlexboxProps, typography, TypographyProps} from "styled-system"

import {
  ISharedSystemProps,
  sharedSystemProps,
  shouldForwardProp,
} from "../system/shared"

export interface QButtonProps
  extends ISharedSystemProps,
    FlexboxProps,
    TypographyProps {}

const Button = styled.button.withConfig({
  shouldForwardProp,
})<QButtonProps>`
  display: flex;
  /* Remove outline for non-keyboard :focus */

  &:active {
    outline: none;
  }

  *:focus:not(.focus-visible) {
    outline: none;
  }

  will-change: transform;
  ${sharedSystemProps};
  ${flexbox};
  ${typography};
`

Button.defaultProps = {
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "center",
  px: "16px",
}
export default Button
