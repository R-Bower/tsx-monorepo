import React, {PropsWithChildren} from "react"

import styled from "styled-components"
import {flexbox, FlexboxProps} from "styled-system"

import {
  CommonSystemProps,
  commonSystemProps,
  shouldForwardProp,
} from "../../system/shared"
import {ComponentProps} from "../../types/props"

export interface FlexProps extends CommonSystemProps, FlexboxProps {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<FlexProps>`
  box-sizing: border-box;
  ${flexbox};
  ${commonSystemProps};
`

const Flex = React.forwardRef<
  HTMLDivElement,
  FlexProps | ComponentProps<typeof FlexStyled>
>((props: FlexProps, ref) => {
  return <FlexStyled ref={ref} {...props} />
})

Flex.defaultProps = {
  display: "flex",
}

export default Flex
