import React, {HTMLAttributes} from "react"

import styled from "styled-components"

import {sx, SxProp} from "@rb/react-style-system"

interface TableProps extends SxProp, HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode
}

const StyledTable = styled.table<SxProp>`
  ${sx};
`

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (props, ref) => {
    return (
      <StyledTable
        ref={ref}
        {...props}
        sx={{
          display: "block",
          img: {
            bg: "transparent",
          },
          mb: 4,
          overflow: "auto",
          th: {
            fontWeight: 600,
          },
          "th, td": {
            border: "solid 1px",
            borderColor: "border.light",
            px: 3,
            py: 2,
          },
          tr: {
            "&:nth-child(2n)": {
              bg: "palette.secondary.light",
            },
            bg: "white",
            borderTop: "solid 1px",
            borderTopColor: "border.tertiary",
          },
          width: 1,
        }}
      />
    )
  },
)
