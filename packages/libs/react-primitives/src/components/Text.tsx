import styled, {css} from "styled-components"
import {typography, TypographyProps} from "styled-system"

import {
  ISharedSystemProps,
  sharedSystemProps,
  shouldForwardProp,
} from "../system/shared"

interface QTextProps extends ISharedSystemProps, TypographyProps {
  tag?: "h1" | "h2" | "h3" | "p" | "span"
}

const textProps = css`
  margin: 0;
  ${typography};
  ${sharedSystemProps};
`

const Text = styled.p.withConfig({shouldForwardProp})<QTextProps>`
  ${textProps};
`

Text.defaultProps = {
  fontSize: "16px",
  fontWeight: 300,
  letterSpacing: "normal",
}

export default Text
