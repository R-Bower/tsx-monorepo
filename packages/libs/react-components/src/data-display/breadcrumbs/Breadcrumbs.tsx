import React from "react"

import styled from "styled-components"

import {Flex, FlexProps} from "../../primitives/flex/Flex"

export type BreadcrumbsProps = FlexProps

const BaseBreadcrumbs = styled(Flex)<FlexProps>``

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      display = "flex",
      justifyContent = "space-between",
      ...props
    }: BreadcrumbsProps,
    ref,
  ) => {
    return (
      <BaseBreadcrumbs
        ref={ref}
        as={"nav"}
        display={display}
        justifyContent={justifyContent}
        {...props}
      />
    )
  },
)
