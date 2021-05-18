import React from "react"

import {SystemCssProperties} from "@styled-system/css"
import * as CSS from "csstype"
import {FlattenSimpleInterpolation} from "styled-components"
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
  Theme,
  TypographyProps,
} from "styled-system"

import {SystemThemeColors} from "../theme/colors/colors"
import {ThemeShadows} from "../theme/shadows/shadows"
import {DeepObjectKeys} from "./utils"

/**
 * Extract a component's props
 *
 * Source: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring-a-component
 *
 * @example ComponentProps<typeof MyComponent>
 */
export type ComponentProps<T> = T extends React.ComponentType<infer Props>
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends object
    ? Props
    : never
  : never

export type ComponentPropsWithRef<T extends React.ElementType> =
  T extends React.ComponentClass<infer P>
    ? React.PropsWithoutRef<P> & React.RefAttributes<InstanceType<T>>
    : React.PropsWithRef<ComponentProps<T>>

export interface CustomSystemProps {
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

export type ColorsType = ResponsiveValue<DeepObjectKeys<SystemThemeColors>>

export type SystemTheme = Theme

export type SystemCSSReturnType = (
  props?: SystemTheme | {theme: SystemTheme},
) => any

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
    CSSPseudoSelectorProps {}

type CSSPseudoSelectorProps = {
  [K in CSS.Pseudos]?: SystemStyleObject
}

export interface SystemStyleObject
  extends BaseSystemStyleObject,
    CSSPseudoSelectorProps {
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
    Omit<ColorProps, "color" | "bg" | "backgroundColor">,
    LayoutProps,
    SpaceProps,
    CustomSystemProps {
  as?: React.ElementType
  backgroundColor?: ColorsType
  bg?: ColorsType
  color?: ColorsType
  // compatibility with @styled-system/css and `styled-components css`
  css?: SystemCSSReturnType | FlattenSimpleInterpolation
  children?: React.ReactNode
}
