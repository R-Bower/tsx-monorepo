import React, {HTMLAttributes} from "react"

import {Base} from "../../primitives/base/Base"

export const Table = React.forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>((props, ref) => {
  return (
    <Base
      ref={ref}
      as={"table"}
      {...props}
      sx={{
        color: "text.primary",
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
          bg: "bg.primary",
          border: "solid 1px",
          borderColor: "border.secondary",
          px: 3,
          py: 2,
        },
        tr: {
          "&:nth-child(2n)": {
            bg: "bg.primary",
          },
          bg: "white",
          borderTop: "solid 1px",
          borderTopColor: "border.tertiary",
        },
        width: 1,
      }}
    />
  )
})
