import React, {HTMLAttributes} from "react"

import styled from "styled-components"
import {GridProps} from "styled-system"

import {GRID} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"
import {CommonSystemProps} from "../../system/types"

export interface SystemGridProps
  extends CommonSystemProps,
    GridProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const GridStyled = styled.div.withConfig({
  shouldForwardProp,
})<SystemGridProps>`
  ${GRID}
  ${sx}
`

export const Grid = React.forwardRef<HTMLDivElement, SystemGridProps>(
  (props: GridProps, ref) => {
    return <GridStyled ref={ref} {...props} />
  },
)

Grid.defaultProps = {
  display: "grid",
}
Grid.displayName = "Grid"
