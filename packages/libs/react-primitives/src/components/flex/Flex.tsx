import styled from "styled-components"
import {flexbox, FlexboxProps} from "styled-system"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "~system/shared"

export interface IFlexProps extends ISharedSystemProps, FlexboxProps {}

const Flex = styled.div.withConfig({shouldForwardProp})<IFlexProps>`
  box-sizing: border-box;
  ${flexbox};
  ${commonSystemProps};
`

Flex.defaultProps = {
  display: "flex",
}

export default Flex
