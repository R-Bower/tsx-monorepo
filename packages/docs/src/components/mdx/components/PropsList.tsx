import React from "react"

import {
  BACKGROUND,
  BORDER,
  COLOR,
  COMMON,
  DISPLAY,
  EFFECTS,
  FLEX,
  GRID,
  INTERACTIVITY,
  LAYOUT,
  SIZING,
  SPACE,
  TRANSITIONS,
  TYPOGRAPHY,
} from "@rb/react-style-system"

interface PropsListProps {
  systemProps: string
}

const propsMap = {
  BACKGROUND,
  BORDER,
  COLOR,
  COMMON,
  DISPLAY,
  EFFECTS,
  FLEX,
  GRID,
  INTERACTIVITY,
  LAYOUT,
  SIZING,
  SPACE,
  TRANSITIONS,
  TYPOGRAPHY,
}

const PropsList = ({systemProps}: PropsListProps): React.ReactElement => (
  <div>{propsMap[systemProps].propNames.join(", ")}</div>
)

export default PropsList
