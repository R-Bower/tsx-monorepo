import React from "react"

import {Box, BoxProps} from "../../primitives/box/Box"

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  size?: string | number
  color?: string
  title?: string
}

export type IconType = (props: IconBaseProps) => JSX.Element

interface IconProps extends BoxProps {
  icon: IconType
  title?: string
}

export const ReactIcon = React.forwardRef<HTMLDivElement, IconProps>(
  ({icon: Component, size, title, ...props}, ref) => {
    return (
      <Box ref={ref} size={size} {...props}>
        <Component color={"inherit"} size={"inherit"} title={title} />
      </Box>
    )
  },
)
