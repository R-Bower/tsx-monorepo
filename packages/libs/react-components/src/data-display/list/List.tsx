import React, {HTMLAttributes} from "react"

import {Element} from "../../primitives/element/Element"

export const List = React.forwardRef<
  HTMLUListElement,
  HTMLAttributes<HTMLUListElement>
>((props, ref) => {
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
})
