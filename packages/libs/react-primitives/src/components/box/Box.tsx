import styled from "styled-components"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"

export type IBoxProps = ISharedSystemProps

const Box = styled.div.withConfig({shouldForwardProp})<IBoxProps>`
  ${commonSystemProps};
`

export default Box
