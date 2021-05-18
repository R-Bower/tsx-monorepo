import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {commonSystemProps, SystemCommonProps} from "../../system/common"

export interface BoxProps
  extends SystemCommonProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const StyledBox = styled.div<BoxProps>`
  ${commonSystemProps};
`

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    return <StyledBox ref={ref} {...props} />
  },
)

Box.displayName = "Box"

function ReactElement() {
  return <Box color={"text.primary"}></Box>
}
