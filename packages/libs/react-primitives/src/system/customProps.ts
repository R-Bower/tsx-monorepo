import {ConfigStyle} from "styled-system"

import {pixelSizeTransformer} from "./utils/transformers"

export const customTextProps = {
  textDecoration: true,
  textOverflow: true,
  textShadow: true,
  textTransform: true,
}

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
  maxHeight: {
    property: "maxHeight",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  maxWidth: {
    property: "maxWidth",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  minHeight: {
    property: "minHeight",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  minWidth: {
    property: "minWidth",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  outline: true,
  pointerEvents: true,
  transform: true,
  transformOrigin: true,
  transition: true,
  userSelect: true,
  whiteSpace: true,
  willChange: true,
  wordBreak: true,
}
