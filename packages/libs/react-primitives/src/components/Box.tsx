import styled from "styled-components"

import {
  ISharedSystemProps,
  sharedSystemProps,
  shouldForwardProp,
} from "../system/shared"

export type IBoxProps = ISharedSystemProps

const Box = styled.div.withConfig({shouldForwardProp})<IBoxProps>`
  ${sharedSystemProps};
`

export default Box
