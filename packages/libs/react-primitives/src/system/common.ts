/* eslint-disable @typescript-eslint/no-empty-interface */
// TODO: remove eslint disable after adjusting system.
import {ColorGetter, SystemProp} from "@xstyled/styled-components"
import {
  backgroundColor,
  borders,
  color,
  EffectsProps,
  FlexboxesProps,
  compose,
  flexboxes,
  effects,
  interactivity,
  layout,
  sizing,
  space,
  transitions,
  typography,
  BordersProps,
  DefaultTheme,
  LayoutProps,
  InteractivityProps,
  SizingProps,
  SpaceProps,
  TypographyProps,
} from "@xstyled/system"

import {SystemThemeColors} from "../theme/colors/colors"
import {DeepObjectKeys} from "../types/utils"

export type ColorsType = string & DeepObjectKeys<SystemThemeColors>

export interface SystemTheme extends Omit<DefaultTheme, "colors"> {
  colors: ColorsType
}

export type ColorProp = SystemProp<ColorsType & string, SystemTheme>

export interface ColorProps {
  color?: string & ColorProp
  motionSafeColor?: ColorProp
  motionReduceColor?: ColorProp
  firstColor?: ColorProp
  lastColor?: ColorProp
  oddColor?: ColorProp
  evenColor?: ColorProp
  visitedColor?: ColorProp
  checkedColor?: ColorProp
  focusWithinColor?: ColorProp
  hoverColor?: ColorProp
  focusColor?: ColorProp
  focusVisibleColor?: ColorProp
  activeColor?: ColorProp
  disabledColor?: ColorProp
  placeholderColor?: ColorProp
}

/*
 * BACKGROUNDS: background,backgroundColor,backgroundImage,backgroundSize,backgroundPosition,backgroundRepeat,backgroundAttachment,backgroundClip,gradientFrom,gradientVia,gradientTo
 *
 * BORDERS: border, borderColor, borderWidth, borderStyle, outline, outlineColor, outlineWidth, outlineStyle, borderRadius, divideY, divideX, divideXReverse, divideYReverse, divideColor, divideStyle, ring, ringInset, ringColor
 *
 * FLEXBOXES: alignItems, alignContent, justifyContent, justifyItems, flexWrap, flexGrow, flexShrink, flexBasis, flexDirection, flex, justifySelf, alignSelf, order
 *
 * EFFECTS: opacity, boxShadow, textShadow
 *
 * INTERACTIVITY: appearance, cursor, pointerEvents, resize, userSelect

 * LAYOUT: display, boxSizing, container, overflow, overflowX, overflowY, zIndex, position, top, right, bottom, left, visibility, overscrollBehavior, objectFit
 *
 * SPACE: margin, marginTop, marginRight, marginBottom, marginLeft, mx, my, padding, paddingTop, paddingRight, paddingBottom, paddingLeft, px, py, spaceY, spaceX, spaceXReverse, spaceYReverse
 *
 * SIZING: width, height, maxWidth, maxHeight, minWidth, minHeight
 *
 * TRANSITIONS:
 *
 * TYPOGRAPHY: fontFamily, fontSize, lineHeight, fontWeight, fontStyle, letterSpacing, color, textTransform, textDecoration, textAlign, verticalAlign, whiteSpace, textOverflow, listStyleType, listStylePosition
 */
export interface SystemBorderProps extends BordersProps<SystemTheme> {}
export interface SystemColorProps extends ColorProps {}
export interface SystemEffectsProps extends EffectsProps<SystemTheme> {}
export interface SystemFlexboxProps extends FlexboxesProps<SystemTheme> {}
export interface SystemLayoutProps extends LayoutProps<SystemTheme> {}
export interface SystemInteractivityProps
  extends InteractivityProps<SystemTheme> {}
export interface SystemSizingProps extends SizingProps<SystemTheme> {}
export interface SystemSpaceProps extends SpaceProps<SystemTheme> {}
export interface SystemTypographyProps extends TypographyProps<SystemTheme> {}

export interface SystemCommonProps
  extends SystemBorderProps,
    SystemColorProps,
    SystemLayoutProps,
    SystemInteractivityProps,
    SystemSizingProps,
    SystemSpaceProps {}

export const commonSystemProps = compose(
  backgroundColor,
  borders,
  color,
  layout,
  interactivity,
  sizing,
  space,
  transitions,
)
export const flexSystemProps = compose(
  borders,
  backgroundColor,
  color,
  layout,
  interactivity,
  sizing,
  space,
  transitions,
  flexboxes,
)
export const typographySystemProps = compose(
  borders,
  backgroundColor,
  color,
  effects,
  layout,
  interactivity,
  sizing,
  space,
  transitions,
  typography,
)
