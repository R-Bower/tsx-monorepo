import * as CSS from "csstype"
import {ConfigStyle, system, ResponsiveValue} from "styled-system"

import {pixelSizeTransformer} from "./transformers"

export interface ICustomSystemProps {
  appearance?: ResponsiveValue<CSS.Property.Appearance>
  boxDecorationBreak?: ResponsiveValue<CSS.Property.BoxDecorationBreak>
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>
  clip?: ResponsiveValue<CSS.Property.Clip>
  cursor?: ResponsiveValue<CSS.Property.Cursor>
  fill?: ResponsiveValue<string>
  listStyle?: ResponsiveValue<CSS.Property.ListStyle>
  listStyleType?: ResponsiveValue<CSS.Property.ListStyleType>
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>
  outline?: ResponsiveValue<CSS.Property.Outline>
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>
  transform?: ResponsiveValue<CSS.Property.Transform>
  transition?: ResponsiveValue<CSS.Property.Transition>
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>
  willChange?: ResponsiveValue<CSS.Property.WillChange>
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>
}

export const customProps = {
  appearance: true,
  boxDecorationBreak: true,
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
  objectFit: true,
  outline: true,
  pointerEvents: true,
  textDecoration: true,
  textOverflow: true,
  textShadow: true,
  textTransform: true,
  transform: true,
  transition: true,
  userDrag: true,
  userSelect: true,
  whiteSpace: true,
  willChange: true,
  wordBreak: true,
}

export default system(customProps)
