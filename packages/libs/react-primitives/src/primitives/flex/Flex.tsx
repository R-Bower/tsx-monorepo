import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {flexbox, FlexboxProps} from "styled-system"

import {CommonSystemProps} from "../../system/common"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"

export interface FlexProps
  extends CommonSystemProps,
    FlexboxProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<FlexProps>`
  ${flexbox};
  ${commonSystemProps};
`

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props: FlexProps, ref) => {
    return <FlexStyled ref={ref} {...props} />
  },
)

Flex.defaultProps = {
  display: "flex",
}
Flex.displayName = "Flex"
