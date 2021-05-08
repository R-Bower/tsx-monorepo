import React from "react"

import styled from "styled-components"
import {flexbox, FlexboxProps} from "styled-system"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

interface SystemFlexProps extends CommonSystemProps, FlexboxProps {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<SystemFlexProps>`
  box-sizing: border-box;
  ${flexbox};
  ${commonSystemProps};
`

export type FlexProps = ComponentProps<typeof FlexStyled>

const Flex = React.forwardRef((props: FlexProps, ref) => {
  return <FlexStyled ref={ref} display={"flex"} {...props} />
})

Flex.defaultProps = {
  display: "flex",
}

export default Flex
