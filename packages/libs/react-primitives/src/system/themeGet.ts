import {SystemTheme} from "./types"
import {get} from "./utils/get"

interface Theme {
  theme?: SystemTheme
}

type ThemeProp = Theme | {[key: string]: any}

export const themeGet =
  (path: string, fallback = null) =>
  (props: ThemeProp): string | number =>
    get(props.theme, path, fallback)
