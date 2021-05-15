import React from "react"

import * as CSS from "csstype"
import {FlattenSimpleInterpolation} from "styled-components"
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps,
} from "styled-system"

import {ThemeColors} from "../theme/colors/colors"
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

export interface PropsWithChildren {
  children: React.ReactNode
}

export interface CustomSystemProps {
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing>
  clip?: ResponsiveValue<CSS.Property.Clip>
  cursor?: ResponsiveValue<CSS.Property.Cursor>
  fill?: ColorsType
  outline?: ResponsiveValue<CSS.Property.Outline>
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>
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

export interface SystemBorderProps
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
  css?: FlattenSimpleInterpolation
  children?: React.ReactNode
  "data-test-id"?: string
}
