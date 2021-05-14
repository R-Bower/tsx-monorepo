// re-usable props for use with react-view

import {PropTypes, TProp} from "react-view"

export const fontSize: TProp = {
  description:
    "A string, integer, or Array that maps to the font-size css attribute.  Integers are automatically converted into pixels.  Arrays are automatically converted into responsive props. See: ",
  type: PropTypes.Array,
  value: `[16]`,
}
