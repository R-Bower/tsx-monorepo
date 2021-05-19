import React from "react"

import {SystemCssProperties} from "@styled-system/css"
import * as CSS from "csstype"
import {FlattenSimpleInterpolation} from "styled-components"
import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
  Theme,
  TypographyProps,
} from "styled-system"

import {ThemeColors} from "../theme/colors/colors"
import {ThemeShadows} from "../theme/shadows/shadows"
import {DeepObjectKeys} from "./utils"

export type CustomSystemProps = {
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>
  clip?: ResponsiveValue<CSS.Property.Clip>
  cursor?: ResponsiveValue<CSS.Property.Cursor>
  fill?: ColorsType
  outline?: ResponsiveValue<CSS.Property.Outline>
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>
  transition?: ResponsiveValue<CSS.Property.Transition>
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>
  willChange?: ResponsiveValue<CSS.Property.WillChange>
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>
}

export interface SystemTextProps extends TypographyProps {
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>
  textShadow?: ResponsiveValue<CSS.Property.TextShadow>
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>
}

export type ShadowsType = ResponsiveValue<keyof ThemeShadows>

export type ColorsType = ResponsiveValue<DeepObjectKeys<ThemeColors>>

export interface SystemTheme extends Omit<Theme, "colors" | "shadows"> {
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export type SystemCSS = (props?: SystemTheme | {theme: SystemTheme}) => any

interface BaseSystemStyleObject
  extends Omit<
      SystemCssProperties,
      | "backgroundColor"
      | "bg"
      | "borderColor"
      | "borderTopColor"
      | "borderRightColor"
      | "borderBottomColor"
      | "borderLeftColor"
      | "color"
    >,
    SystemPseudoSelectors {}

type SystemPseudoSelectors = {
  [K in CSS.Pseudos]?: SystemStyleObject
}

type CSSSelectors = {
  [cssSelector: string]: SystemStyleObject
}

interface SystemColors {
  backgroundColor?: ColorsType
  bg?: ColorsType
  borderColor?: ColorsType
  borderTopColor?: ColorsType
  borderRightColor?: ColorsType
  borderBottomColor?: ColorsType
  borderLeftColor?: ColorsType
  color?: ColorsType
  variant?: string
}

export type SystemStyleObject =
  | BaseSystemStyleObject
  | SystemPseudoSelectors
  | SystemColors
  | CSSSelectors

export interface SystemBorderProps
  // override color props with the values matching the ThemeColors interface
  extends Omit<
    BorderProps,
    | "borderColor"
    | "borderTopColor"
    | "borderRightColor"
    | "borderBottomColor"
    | "borderLeftColor"
  > {
  borderColor?: ColorsType
  borderTopColor?: ColorsType
  borderRightColor?: ColorsType
  borderBottomColor?: ColorsType
  borderLeftColor?: ColorsType
}

export interface CommonSystemProps
  extends BackgroundProps,
    SystemBorderProps,
    LayoutProps,
    SpaceProps,
    CustomSystemProps {
  as?: React.ElementType
  backgroundColor?: ColorsType
  bg?: ColorsType
  color?: ColorsType
  // compatibility with @styled-system/css and `styled-components css`
  css?: SystemCSS | FlattenSimpleInterpolation
  children?: React.ReactNode
}
