import styled from "styled-components"

import {
  ISharedSystemProps,
  sharedSystemProps,
  shouldForwardProp,
} from "../system/shared"

export type ISvgProps = ISharedSystemProps

const Svg = styled.svg.withConfig({shouldForwardProp})<ISvgProps>`
  ${sharedSystemProps};
`

Svg.displayName = "Primitives.Svg"

export default Svg
