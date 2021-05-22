import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {FlexboxProps} from "styled-system"

import {FLEX} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"
import {CommonSystemProps} from "../../system/types"

export interface FlexProps
  extends CommonSystemProps,
    FlexboxProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<FlexProps>`
  ${FLEX}
  ${sx}
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
