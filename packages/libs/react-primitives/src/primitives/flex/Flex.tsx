import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  FLEX,
  SystemCommonProps,
  SystemFlexProps,
} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"

export interface FlexProps
  extends SystemCommonProps,
    SystemFlexProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const FlexStyled = styled.div.withConfig({shouldForwardProp})<FlexProps>`
  ${COMMON};
  ${FLEX};
  ${sx};
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
