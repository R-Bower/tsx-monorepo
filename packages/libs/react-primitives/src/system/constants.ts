import React from "react"

import {SystemCssProperties} from "@styled-system/css"
import * as CSS from "csstype"
import {FlattenSimpleInterpolation as StyledComponentsCssProp} from "styled-components"
import * as SS from "styled-system"

import {ThemeColors} from "../theme/colors/colors"
import {ThemeShadows} from "../theme/shadows/shadows"
import {
  borderProps,
  interactivityProps,
  layoutProps,
  sizingProps,
  textProps,
  transitionProps,
} from "./customProps"
import {DeepObjectKeys} from "./utils/utils"

export type SystemShadows = SS.ResponsiveValue<keyof ThemeShadows>

type BaseColorsType = SS.ResponsiveValue<
  DeepObjectKeys<ThemeColors> | "inherit" | "white" | "black" | "transparent"
>
export type ColorsType = BaseColorsType

export interface SystemTheme
  extends Omit<SS.Theme, "breakpoints" | "colors" | "shadows"> {
  breakpoints?: string[]
  colors?: ThemeColors
  shadows?: ThemeShadows
}

export type SystemBackgroundProps = SS.BackgroundProps

export const BACKGROUND = SS.background

// BORDER
export interface SystemBorderProps
  extends SS.BorderStyleProps,
    SS.BorderWidthProps,
    SS.BorderRadiusProps,
    SS.BorderBottomProps,
    SS.BorderLeftProps,
    SS.BorderTopProps,
    SS.BorderRightProps {
  border?: SS.ResponsiveValue<CSS.Property.Border>
  borderColor?: ColorsType
  borderTopColor?: ColorsType
  borderRightColor?: ColorsType
  borderBottomColor?: ColorsType
  borderLeftColor?: ColorsType
  outline?: SS.ResponsiveValue<CSS.Property.Outline>
  outlineColor?: ColorsType
  outlineWidth?: SS.ResponsiveValue<CSS.Property.OutlineWidth>
  outlineStyle?: SS.ResponsiveValue<CSS.Property.OutlineStyle>
}

export const BORDER = SS.compose(SS.system(borderProps), SS.border)

// COLOR
export interface SystemColorProps {
  backgroundColor?: ColorsType
  bg?: ColorsType
  color?: ColorsType
}

export const COLOR = SS.color

// EFFECTS
export interface SystemEffectsProps {
  boxShadow?: SS.ResponsiveValue<CSS.Property.BoxShadow>
  opacity?: SS.ResponsiveValue<CSS.Property.Opacity>
  textShadow?: SS.ResponsiveValue<CSS.Property.TextShadow>
}

export interface SystemDisplayProps {
  display?: SS.ResponsiveValue<CSS.Property.Display>
}

export const DISPLAY = SS.display

export const EFFECTS = SS.compose(SS.boxShadow, SS.opacity, SS.textShadow)

// FLEX
export type SystemFlexProps = SS.FlexboxProps

export const FLEX = SS.flexbox

// GRID
export type SystemGridProps = SS.GridProps

export const GRID = SS.grid

// INTERACTIVITY
export interface SystemInteractivityProps {
  appearance?: SS.ResponsiveValue<CSS.Property.Appearance>
  cursor?: SS.ResponsiveValue<CSS.Property.Cursor>
  pointerEvents?: SS.ResponsiveValue<CSS.Property.PointerEvents>
  resize?: SS.ResponsiveValue<CSS.Property.Resize>
  userSelect?: SS.ResponsiveValue<CSS.Property.UserSelect>
}

export const INTERACTIVITY = SS.system(interactivityProps)

// LAYOUT
export interface SystemLayoutProps {
  bottom?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  boxSizing?: SS.ResponsiveValue<CSS.Property.BoxSizing>
  left?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  objectFit?: SS.ResponsiveValue<CSS.Property.ObjectFit>
  overflow?: SS.ResponsiveValue<CSS.Property.Overflow>
  overflowX?: SS.ResponsiveValue<CSS.Property.OverflowX>
  overflowY?: SS.ResponsiveValue<CSS.Property.OverflowY>
  overscrollBehavior?: SS.ResponsiveValue<CSS.Property.OverscrollBehavior>
  position?: SS.ResponsiveValue<CSS.Property.Position>
  right?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  top?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  visibility?: SS.ResponsiveValue<CSS.Property.Visibility>
  zIndex?: SS.ResponsiveValue<CSS.Property.ZIndex>
}

export const LAYOUT = SS.compose(
  SS.system(layoutProps),
  SS.overflow,
  SS.overflowX,
  SS.overflowY,
  SS.zIndex,
  SS.top,
  SS.right,
  SS.bottom,
  SS.left,
)

// SIZING
export interface SystemSizingProps {
  height?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  maxHeight?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  maxWidth?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  minHeight?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  minWidth?: SS.ResponsiveValue<SS.TLengthStyledSystem>
  width?: SS.ResponsiveValue<SS.TLengthStyledSystem>
}

export const SIZING = SS.system(sizingProps)

// SPACE
export type SystemSpaceProps = SS.SpaceProps

export const SPACE = SS.space

// TRANSITIONS
export interface SystemTransitionProps {
  transition?: SS.ResponsiveValue<CSS.Property.Transition>
  transitionDelay?: SS.ResponsiveValue<CSS.Property.TransitionDelay>
  transitionDuration?: SS.ResponsiveValue<CSS.Property.TransitionDuration>
  transitionProperty?: SS.ResponsiveValue<CSS.Property.TransitionProperty>
  transitionTimingFunction?: SS.ResponsiveValue<CSS.Property.TransitionTimingFunction>
  willChange?: SS.ResponsiveValue<CSS.Property.WillChange>
}

export const TRANSITIONS = SS.system(transitionProps)

// TYPOGRAPHY
export interface SystemTypographyProps extends SS.TypographyProps {
  listStyleType?: SS.ResponsiveValue<CSS.Property.ListStyleType>
  listStylePosition?: SS.ResponsiveValue<CSS.Property.ListStylePosition>
  textDecoration?: SS.ResponsiveValue<CSS.Property.TextDecoration>
  textOverflow?: SS.ResponsiveValue<CSS.Property.TextOverflow>
  textShadow?: SS.ResponsiveValue<CSS.Property.TextShadow>
  textTransform?: SS.ResponsiveValue<CSS.Property.TextTransform>
  whiteSpace?: SS.ResponsiveValue<CSS.Property.WhiteSpace>
  wordBreak?: SS.ResponsiveValue<CSS.Property.WordBreak>
}

export const TYPOGRAPHY = SS.compose(SS.system(textProps), SS.typography)

// COMMON
export interface SystemCommonProps
  extends SystemBackgroundProps,
    SystemBorderProps,
    SystemColorProps,
    SystemDisplayProps,
    SystemSizingProps,
    SystemSpaceProps,
    SystemTransitionProps {
  as?: React.ElementType
  css?: StyledComponentsCssProp
  children?: React.ReactNode
  sx?: SystemStyleObject
}

export const COMMON = SS.compose(
  BACKGROUND,
  BORDER,
  COLOR,
  DISPLAY,
  SIZING,
  SPACE,
  TRANSITIONS,
)

// System Style Object
type SystemPseudoSelectors = {
  [K in CSS.Pseudos]?: SystemStyleObject
}

type CSSSelectors = {
  [cssSelector: string]: SystemStyleObject
}

export type SystemStyleObject =
  | SystemBackgroundProps
  | SystemBorderProps
  | SystemColorProps
  | SystemDisplayProps
  | SystemEffectsProps
  | SystemFlexProps
  | SystemGridProps
  | SystemInteractivityProps
  | SystemLayoutProps
  | SystemSizingProps
  | SystemSpaceProps
  | SystemTransitionProps
  | SystemTypographyProps
  | SystemPseudoSelectors
  | CSSSelectors
  | SystemCssProperties
  | string
  | null
