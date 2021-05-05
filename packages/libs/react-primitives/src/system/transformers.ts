import {is} from "rambda"

export const pixelSizeTransformer = (value: number): number | string => {
  if (is(Number, value)) {
    if (value > 0 && value <= 1) {
      return `${(value * 100).toFixed(1)}%`
    }
  }
  if ((is(Number, value) && value > 1) || value === 0) {
    return `${value}px`
  }
  return value
}
