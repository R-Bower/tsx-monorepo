import React from "react"

import {Element, ElementProps} from "@rb/react-primitives"

export const List = React.forwardRef<HTMLUListElement, ElementProps>(
  (props, ref) => {
    return (
      <Element
        ref={ref}
        as={"ul"}
        {...props}
        sx={{
          li: {
            wordWrap: "break-word",
          },
          "li + li": {
            mt: 2,
          },
          "li > p": {
            mt: 3,
          },
          pl: "2em",
          "ul, ol": {my: 0},
        }}
      />
    )
  },
)
