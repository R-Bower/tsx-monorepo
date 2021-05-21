import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {GridProps} from "styled-system"

import {CommonSystemProps} from "../../system/common"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"

export interface SystemGridProps
  extends CommonSystemProps,
    GridProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const GridStyled = styled.div.withConfig({
  shouldForwardProp,
})<SystemGridProps>`
  ${commonSystemProps};
`

export const Grid = React.forwardRef<HTMLDivElement, SystemGridProps>(
  (props: GridProps, ref) => {
    return <GridStyled ref={ref} {...props} />
  },
)

Grid.defaultProps = {
  display: "grid",
}
Grid.displayName = "GridProps"
