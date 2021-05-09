import React from "react"

import styled from "styled-components"
import {flexbox, FlexboxProps} from "styled-system"

import {
  ISharedSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

interface FlexProps extends ISharedSystemProps, FlexboxProps {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<FlexProps>`
  box-sizing: border-box;
  ${flexbox};
  ${commonSystemProps};
`

export type IFlexProps = ComponentProps<typeof FlexStyled>

const Flex = React.forwardRef((props: IFlexProps, ref) => {
  return <FlexStyled ref={ref} {...props} />
})

Flex.defaultProps = {
  display: "flex",
}

export default Flex
