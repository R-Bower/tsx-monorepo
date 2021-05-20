// import original module declarations
import "styled-components"

import {SystemTheme} from "@rb/react-primitives"

// and extend them!
declare module "styled-components" {
  /* eslint-disable-next-line */
  export interface DefaultTheme extends SystemTheme {}
}
