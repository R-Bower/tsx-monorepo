// UI Primitives
export {default as AnimatedBox} from "./components/animated-box/AnimatedBox"
export {default as Box, BoxProps} from "./components/box/Box"
export {
  default as Elevation,
  ElevationProps,
} from "./components/elevation/Elevation"
export {default as Flex, FlexProps} from "./components/flex/Flex"
export {default as Input, InputProps} from "./components/input/Input"
export {default as Svg, SvgProps} from "./components/svg/Svg"
export {default as Text, TextProps} from "./components/text/Text"
export {
  default as TextArea,
  TextAreaProps,
} from "./components/text-area/TextArea"
export * from "./components/position/Position"

// Theme
export {default as StyledThemeProvider} from "./theme/Provider"
export {default as DefaultGlobalStyle} from "./theme/GlobalStyle"
export * from "./theme/config"

export * from "./system/customProps"
export * from "./system/shared"
export * from "./types/props"
