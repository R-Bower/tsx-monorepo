// based on https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
import {defaultTheme} from "../theme/config"
import {SystemStyleObject} from "./common"
import {pixelSizeTransformer} from "./transformers"

export const get = (obj, key, def?, p?, undef?) => {
  key = key && key.split ? key.split(".") : [key]
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef
  }
  return obj === undef ? def : obj
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

const layoutTransforms = ["height", "maxHeight", "maxWidth", "width"].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: pixelSizeTransformer,
  }),
  {},
)

const positiveOrNegative = (scale, value: string | number): string | number => {
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

const spaceTransforms: {[key: string]: string | number} = [
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

/*
 * styled-system isn't setup to receive pseudo selectors on react components.  Even if it were,
 * React props can't start with characters like `&`, `>`, and `:`, which are necessary for pseudo selectors.
 * This helper function bypasses those limitations when used with the styled-components css prop.
 *
 * When styled-components receives a css prop it processes the raw css values (which aren't theme aware).
 * This helper utility transforms our styled-system SystemStyleObject against the configured
 * theme.  This gives us the ability to use styled-system props as if they were template literal
 * CSS styles.  Advantage: strongly typed, theme-aware css compositions.
 *
 * Example usage:
 *
 * <Flex sx={{
 *   "&:hover": {
 *     border: "solid 2px",
 *     color: "text.secondary"
 *   }
 * }} />
 */

export const responsive = (styles) => (theme) => {
  const next = {}
  const breakpoints = get(theme, "breakpoints", defaultTheme.breakpoints)
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

export const css = (args) => (props: any = {}) => {
  const theme = {...defaultTheme, ...(props.theme || props)}
  let result = {}
  const obj = typeof args === "function" ? args(theme) : args
  const styles = responsive(obj)(theme)

  for (const key in styles) {
    const x = styles[key]
    const val = typeof x === "function" ? x(theme) : x

    if (key === "variant") {
      const variant = css(get(theme, val))(theme)
      result = {...result, ...variant}
      continue
    }

    if (val && typeof val === "object") {
      result[key] = css(val)(theme)
      continue
    }

    const prop = get(aliases, key, key)
    const scaleName = get(scales, prop)
    const scale = get(theme, scaleName, get(theme, prop, {}))
    let value
    if (layoutTransforms[prop]) {
      value = layoutTransforms[prop](val)
    } else {
      const transform = get(spaceTransforms, prop, get)
      value = transform(scale, val, val)
    }

    if (multiples[prop]) {
      const dirs = multiples[prop]

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value
      }
    } else {
      result[prop] = value
    }
  }

  return result
}

export interface SxProp {
  sx?: SystemStyleObject
}

export const sx = (props: SxProp) => css(props.sx)
