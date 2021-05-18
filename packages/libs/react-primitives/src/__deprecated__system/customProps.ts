import {css} from "styled-components"
import {ConfigStyle, system, typography} from "styled-system"

import {pixelSizeTransformer} from "./transformers"

export const customTextProps = {
  textDecoration: true,
  textOverflow: true,
  textShadow: true,
  textTransform: true,
}

export const systemTextProps = css`
  ${typography};
  ${system(customTextProps)};
`

export const customProps = {
  boxSizing: true,
  cursor: true,
  fill: {
    property: "fill",
    scale: "colors",
  } as ConfigStyle,
  height: {
    property: "height",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  maxWidth: {
    property: "maxWidth",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  outline: true,
  pointerEvents: true,
  transition: true,
  userSelect: true,
  whiteSpace: true,
  willChange: true,
  wordBreak: true,
}

export default system(customProps)
