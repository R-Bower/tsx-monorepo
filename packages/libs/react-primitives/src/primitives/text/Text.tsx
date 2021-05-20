import React, {HTMLAttributes} from "react"

import {is} from "rambda"
import styled from "styled-components"
import {TypographyProps} from "styled-system"

import {CommonSystemProps, SystemTextProps} from "../../system/common"
import {systemTextProps} from "../../system/customProps"
import {commonSystemProps, shouldForwardProp} from "../../system/shared"
import {defaultStyles} from "./styles"

export interface TextProps
  extends Omit<CommonSystemProps, "children">,
    TypographyProps,
    SystemTextProps,
    Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {
  as: React.ElementType
  children: React.ReactNode
  variant?: string
}

const TextStyled = styled.p.withConfig({shouldForwardProp})<TextProps>`
  ${commonSystemProps};
  ${systemTextProps};
`

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({as, variant = "", ...props}: TextProps, ref) => {
    // apply styles from mapped value from `as` or `variant`.  This keeps text styles consistent.
    const tag = variant || as
    const transformer: string = is(String, tag) ? (tag as string) : "p"
    // cast as to string to satisfy the TS compiler
    const styles = is(String, tag)
      ? defaultStyles[transformer]
      : defaultStyles["p"]
    return <TextStyled ref={ref} as={as} {...styles} {...props} />
  },
)
