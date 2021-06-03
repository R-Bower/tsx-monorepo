import sidebarComponents from "~components/page-layout/sidebar/search/components.json"
import {
  SidebarDocGroup,
  sidebarInitialState,
} from "~components/page-layout/sidebar/sidebarSlice"

import {uiInitialState, ViewMode} from "./reducers/ui/uiSlice"

const getSidebarState = () => {
  return {
    ...sidebarInitialState,
    docs: sidebarComponents as SidebarDocGroup[],
    expanded: sidebarComponents.reduce(
      (acc, current) => ({...acc, [current.id]: true}),
      {},
    ),
  }
}

const getUiState = () => {
  return {
    ...uiInitialState,
    viewMode: (process.env.NEXT_PUBLIC_UI_VIEW_MODE || "light") as ViewMode,
  }
}

export const getPreloadedState = () => {
  return {
    sidebar: getSidebarState(),
    ui: getUiState(),
  }
}
