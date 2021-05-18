// based on https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
import {SystemCSSReturnType, SystemStyleObject} from "../types/props"

export const get = (obj, key, def?, p?, undef?) => {
  key = key && key.split ? key.split(".") : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
}

const defaultBreakpoints = [40, 52, 64].map((n) => n + "em")

const defaultTheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}

const aliases = {
  bg: "backgroundColor",
  m: "margin",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingX",
  py: "paddingY",
}

const multiples = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"],
}

const scales = {
  backgroundColor: "colors",
  border: "borders",
  borderBottom: "borders",
  borderBottomColor: "colors",
  borderBottomLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderColor: "colors",
  borderLeft: "borders",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderRadius: "radii",
  borderRight: "borders",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderTop: "borders",
  borderTopColor: "colors",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopStyle: "borderStyles",
  borderTopWidth: "borderWidths",
  borderWidth: "borderWidths",
  bottom: "space",
  boxShadow: "shadows",
  color: "colors",
  columnGap: "space",
  fill: "colors",
  flexBasis: "sizes",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  gap: "space",
  gridColumnGap: "space",
  gridGap: "space",
  gridRowGap: "space",
  height: "sizes",
  left: "space",
  letterSpacing: "letterSpacings",
  lineHeight: "lineHeights",
  margin: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginRight: "space",
  marginTop: "space",
  marginX: "space",
  marginY: "space",
  maxHeight: "sizes",
  maxWidth: "sizes",
  minHeight: "sizes",
  minWidth: "sizes",
  outlineColor: "colors",
  padding: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingRight: "space",
  paddingTop: "space",
  paddingX: "space",
  paddingY: "space",
  right: "space",
  rowGap: "space",
  size: "sizes",
  stroke: "colors",
  textShadow: "shadows",
  top: "space",
  width: "sizes",
  zIndex: "zIndices",
}

const positiveOrNegative = (scale, value) => {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value)
  }
  const absolute = Math.abs(value)
  const n = get(scale, absolute, absolute)
  if (typeof n === "string") {
    return "-" + n
  }
  return n * -1
}

const transforms = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "top",
  "bottom",
  "left",
  "right",
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {},
)

export const responsive = (styles) => (theme) => {
  const next = {}
  const breakpoints = get(theme, "breakpoints", defaultBreakpoints)
  const mediaQueries = [
    null,
    ...breakpoints.map((n) => `@media screen and (min-width: ${n})`),
  ]

  for (const key in styles) {
    const value =
      typeof styles[key] === "function" ? styles[key](theme) : styles[key]

    if (value == null) {
      continue
    }
    if (!Array.isArray(value)) {
      next[key] = value
      continue
    }
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i]
      if (!media) {
        next[key] = value[i]
        continue
      }
      next[media] = next[media] || {}
      if (value[i] == null) {
        continue
      }
      next[media][key] = value[i]
    }
  }

  return next
}

/*
 * Works similarly to @styled-system/css with an exception:
 * 1. Colors are detected from our custom ThemeColors interface.
 */
export const sx =
  (args: SystemStyleObject) =>
  (props: any = {}): SystemCSSReturnType => {
    const theme = {...defaultTheme, ...(props.theme || props)}
    let result = {}
    // @ts-ignore
    const obj = typeof args === "function" ? args(theme) : args
    const styles = responsive(obj)(theme)

    for (const key in styles) {
      const x = styles[key]
      const val = typeof x === "function" ? x(theme) : x

      if (key === "variant") {
        const variant = sx(get(theme, val))(theme)
        result = {...result, ...variant}
        continue
      }

      if (val && typeof val === "object") {
        result[key] = sx(val)(theme)
        continue
      }

      const prop = get(aliases, key, key)
      const scaleName = get(scales, prop)
      const scale = get(theme, scaleName, get(theme, prop, {}))
      const transform = get(transforms, prop, get)
      const value = transform(scale, val, val)

      if (multiples[prop]) {
        const dirs = multiples[prop]

        for (let i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value
        }
      } else {
        result[prop] = value
      }
    }

    return result as SystemCSSReturnType
  }
