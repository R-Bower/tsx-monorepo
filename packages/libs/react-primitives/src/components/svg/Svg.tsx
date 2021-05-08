import styled from "styled-components"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "~system/shared"

export type ISvgProps = ISharedSystemProps

const Svg = styled.svg.withConfig({shouldForwardProp})<ISvgProps>`
  ${commonSystemProps};
`

Svg.displayName = "Primitives.Svg"

export default Svg
