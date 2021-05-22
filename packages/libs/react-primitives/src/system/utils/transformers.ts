import {is} from "rambda"

export const pixelSizeTransformer = (value: string | number): string => {
  if (!is(Number, value)) {
    return value as string
  }
  const num = value as number
  return num > 0 && num <= 1 ? `${(num * 100).toFixed(1)}%` : `${num}px`
}
