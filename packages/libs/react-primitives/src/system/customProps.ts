import * as CSS from "csstype"
import {ConfigStyle, system, ResponsiveValue} from "styled-system"

import {pixelSizeTransformer} from "./transformers"

export interface ICustomSystemProps {
  appearance?: ResponsiveValue<CSS.Property.Appearance>
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>
  clip?: ResponsiveValue<CSS.Property.Clip>
  cursor?: ResponsiveValue<CSS.Property.Cursor>
  fill?: ResponsiveValue<string>
  listStyle?: ResponsiveValue<CSS.Property.ListStyle>
  listStyleType?: ResponsiveValue<CSS.Property.ListStyleType>
  outline?: ResponsiveValue<CSS.Property.Outline>
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>
  transform?: ResponsiveValue<CSS.Property.Transform>
  transition?: ResponsiveValue<CSS.Property.Transition>
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>
  willChange?: ResponsiveValue<CSS.Property.WillChange>
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>
}

export interface ICustomTextProps {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>
  textShadow?: ResponsiveValue<CSS.Property.TextShadow>
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>
}

export const customTextProps = {
  textDecoration: true,
  textOverflow: true,
  textShadow: true,
  textTransform: true,
}

export const customProps = {
  appearance: true,
  boxSizing: true,
  clip: true,
  cursor: true,
  fill: {
    property: "fill",
    scale: "colors",
  } as ConfigStyle,
  height: {
    property: "height",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  listStyle: true,
  listStyleType: true,
  maxWidth: {
    property: "maxWidth",
    transform: pixelSizeTransformer,
  } as ConfigStyle,
  outline: true,
  pointerEvents: true,
  transform: true,
  transition: true,
  userDrag: true,
  userSelect: true,
  whiteSpace: true,
  willChange: true,
  wordBreak: true,
}

export default system(customProps)
