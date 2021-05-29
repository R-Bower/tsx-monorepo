import React, {HTMLAttributes} from "react"

import {Element} from "../../primitives/element/Element"

export const Table = React.forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>((props, ref) => {
  return (
    <Element
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
})
