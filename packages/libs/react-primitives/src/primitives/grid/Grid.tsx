import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {
  COMMON,
  GRID,
  SystemCommonProps,
  SystemGridProps,
} from "../../system/constants"
import {shouldForwardProp} from "../../system/shouldForwardProp"
import {sx} from "../../system/sx"

export interface GridProps
  extends SystemCommonProps,
    SystemGridProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}

const GridStyled = styled.div.withConfig({
  shouldForwardProp,
})<GridProps>`
  ${COMMON};
  ${GRID};
  ${sx};
`

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props: GridProps, ref) => {
    return <GridStyled ref={ref} {...props} />
  },
)

Grid.defaultProps = {
  display: "grid",
}
Grid.displayName = "Grid"
