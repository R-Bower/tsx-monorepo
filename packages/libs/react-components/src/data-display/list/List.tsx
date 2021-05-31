import React, {HTMLAttributes} from "react"

import {SystemTypographyProps} from "@rb/react-style-system"

import {Element, ElementProps} from "../../primitives/element/Element"

interface ListProps extends ElementProps, HTMLAttributes<HTMLUListElement> {
  listStyleType?: SystemTypographyProps["listStyleType"]
  listStylePosition?: SystemTypographyProps["listStylePosition"]
  listTag?: "ul" | "ol" | "dl"
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({listStyleType, listStylePosition, listTag, ...props}, ref) => {
    return (
      <Element
        ref={ref}
        as={listTag}
        {...props}
        sx={{
          color: "text.primary",
          li: {
            wordWrap: "break-word",
          },
          "li + li": {
            mt: 2,
          },
          "li > p": {
            mt: 3,
          },
          listStylePosition,
          listStyleType,
          pl: "2em",
          "ul, ol": {my: 0},
        }}
      />
    )
  },
)
