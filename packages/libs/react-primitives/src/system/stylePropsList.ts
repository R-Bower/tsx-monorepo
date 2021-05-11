import {keys} from "rambda"

import {customProps, customTextProps} from "./customProps"

const styledSystemProps = [
  "alignContent",
  "alignItems",
  "alignSelf",
  "background",
  "backgroundColor",
  "backgroundImage",
  "backgroundPosition",
  "backgroundRepeat",
  "backgroundSize",
  "bg",
  "border",
  "borderBottom",
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStyle",
  "borderBottomWidth",
  "borderColor",
  "borderLeft",
  "borderLeftColor",
  "borderLeftStyle",
  "borderLeftWidth",
  "borderRadius",
  "borderRight",
  "borderRightColor",
  "borderRightStyle",
  "borderRightWidth",
  "borderStyle",
  "borderTop",
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStyle",
  "borderTopWidth",
  "borderWidth",
  "borderX",
  "borderY",
  "bottom",
  "boxShadow",
  "display",
  "flex",
  "flexBasis",
  "flexDirection",
  "flexGrow",
  "flexShrink",
  "flexWrap",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "gridArea",
  "gridAutoColumns",
  "gridAutoFlow",
  "gridAutoRows",
  "gridColumn",
  "gridColumnGap",
  "gridGap",
  "gridRow",
  "gridRowGap",
  "gridTemplateAreas",
  "gridTemplateColumns",
  "gridTemplateRows",
  "height",
  "justifyContent",
  "justifyItems",
  "justifySelf",
  "left",
  "letterSpacing",
  "lineHeight",
  "m",
  "margin",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "marginTop",
  "maxHeight",
  "maxWidth",
  "mb",
  "minHeight",
  "minWidth",
  "ml",
  "mr",
  "mt",
  "mx",
  "my",
  "order",
  "overflow",
  "overflowX",
  "overflowY",
  "p",
  "padding",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "pb",
  "pl",
  "position",
  "pr",
  "pt",
  "px",
  "py",
  "right",
  "size",
  "textAlign",
  "textShadow",
  "top",
  "verticalAlign",
  "width",
  "zIndex",
]

const customStyleProps = [
  ...keys(customProps),
  ...keys(customTextProps),
  "variant",
]

export default [...styledSystemProps, ...customStyleProps]