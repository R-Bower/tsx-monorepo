import styled, {css} from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {ICustomTextProps} from "../../system/customProps"
import {
  commonSystemProps,
  ISharedSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export interface ITextProps
  extends ISharedSystemProps,
    TypographyProps,
    ICustomTextProps {}

const textProps = css`
  margin: 0;
  ${typography};
  ${commonSystemProps};
`

const Text = styled.p.withConfig({shouldForwardProp})<ITextProps>`
  ${textProps};
`

Text.defaultProps = {
  fontSize: "16px",
  fontWeight: 300,
  letterSpacing: "normal",
}

export default Text
