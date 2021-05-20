// import original module declarations
import "styled-components"

import {SystemTheme} from "./src"

// and extend them!
declare module "styled-components" {
  /* eslint-disable-next-line */
  export interface DefaultTheme extends SystemTheme {}
}
