import React from "react"

import {SystemCssProperties} from "@styled-system/css"
import * as CSS from "csstype"
import {FlattenSimpleInterpolation as StyledComponentsCssProp} from "styled-components"
import * as SS from "styled-system"

import {ThemeColors} from "../theme/colors/colors"
import {ThemeShadows} from "../theme/shadows/shadows"
import {DeepObjectKeys} from "./utils"

export type CustomSystemProps = {
  boxSizing?: SS.ResponsiveValue<CSS.Property.BoxSizing>
  clip?: SS.ResponsiveValue<CSS.Property.Clip>
  cursor?: SS.ResponsiveValue<CSS.Property.Cursor>
  fill?: ColorsType
  outline?: SS.ResponsiveValue<CSS.Property.Outline>
  pointerEvents?: SS.ResponsiveValue<CSS.Property.PointerEvents>
  transition?: SS.ResponsiveValue<CSS.Property.Transition>
  userSelect?: SS.ResponsiveValue<CSS.Property.UserSelect>
  whiteSpace?: SS.ResponsiveValue<CSS.Property.WhiteSpace>
  willChange?: SS.ResponsiveValue<CSS.Property.WillChange>
  wordBreak?: SS.ResponsiveValue<CSS.Property.WordBreak>
}

export interface SystemTextProps extends SS.TypographyProps {
  textDecoration?: SS.ResponsiveValue<CSS.Property.TextDecoration>
  textOverflow?: SS.ResponsiveValue<CSS.Property.TextOverflow>
  textShadow?: SS.ResponsiveValue<CSS.Property.TextShadow>
  textTransform?: SS.ResponsiveValue<CSS.Property.TextTransform>
}

export type ShadowsType = SS.ResponsiveValue<keyof ThemeShadows>

export type ColorsType = SS.ResponsiveValue<DeepObjectKeys<ThemeColors>>

export interface SystemTheme
  extends Omit<SS.Theme, "breakpoints" | "colors" | "shadows"> {
  breakpoints: string[]
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export type SystemCssProp = (props?: SystemTheme | {theme: SystemTheme}) => any

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
    SS.BorderProps,
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
  extends SS.BackgroundProps,
    SS.LayoutProps,
    SS.SpaceProps,
    SystemBorderProps,
    CustomSystemProps {
  as?: React.ElementType
  backgroundColor?: ColorsType
  bg?: ColorsType
  color?: ColorsType
  // compatibility with @styled-system/css and `styled-components css`
  css?: SystemCssProp | StyledComponentsCssProp
  children?: React.ReactNode
}
