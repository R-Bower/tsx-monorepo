import {SystemStyleObject} from "./types"
import {css} from "./utils/css"

export interface SxProp {
  sx?: SystemStyleObject
}

export const sx = (props: SxProp) => css(props.sx)
