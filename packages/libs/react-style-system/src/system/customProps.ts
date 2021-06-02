/*
 * Styled system doesn't provide all of the props that our components may need.
 * This file defines the custom props that incorporated into style props
 * by the "system" utility function.
 */
import {ConfigStyle} from "styled-system"

import {pixelSizeTransformer} from "./utils/transformers"

type SystemPropsConfig = {[key: string]: ConfigStyle | boolean}

export const borderProps: SystemPropsConfig = {
  outline: true,
  outlineColor: true,
  outlineStyle: true,
  outlineWidth: true,
}

export const interactivityProps: SystemPropsConfig = {
  appearance: true,
  cursor: true,
  pointerEvents: true,
  resize: true,
  userSelect: true,
}

export const layoutProps: SystemPropsConfig = {
  boxSizing: true,
  objectFit: true,
  overscrollBehavior: true,
  position: true,
  visibility: true,
}

export const sizingProps: SystemPropsConfig = {
  height: {
    properties: ["height"],
    property: "height",
    scale: "sizes",
    transform: pixelSizeTransformer,
  },
  maxHeight: {
    property: "maxHeight",
    transform: pixelSizeTransformer,
  },
  maxWidth: {
    property: "maxWidth",
    transform: pixelSizeTransformer,
  },
  minHeight: {
    property: "minHeight",
    transform: pixelSizeTransformer,
  },
  minWidth: {
    property: "minWidth",
    transform: pixelSizeTransformer,
  },
  width: {
    property: "width",
    scale: "sizes",
    transform: pixelSizeTransformer,
  },
}

export const textProps: SystemPropsConfig = {
  listStylePosition: true,
  listStyleType: true,
  textDecoration: true,
  textOverflow: true,
  textShadow: true,
  textTransform: true,
  whiteSpace: true,
  wordBreak: true,
}

export const transitionProps: SystemPropsConfig = {
  transform: true,
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
  transition: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  willChange: true,
}
