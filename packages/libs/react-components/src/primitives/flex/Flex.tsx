import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  FLEX,
  shouldForwardProp,
  sx,
  SystemCommonProps,
  SystemFlexProps,
  SystemTransitionProps,
} from "@rb/react-style-system"

export interface FlexProps
  extends SystemCommonProps,
    SystemFlexProps,
    SystemTransitionProps,
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
