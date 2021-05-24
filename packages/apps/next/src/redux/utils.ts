import sidebarComponents from "~components/layout/sidebar/search/components.json"
import {
  SidebarDoc,
  sidebarInitialState,
} from "~components/layout/sidebar/sidebarSlice"

const getSidebarState = () => {
  return {
    ...sidebarInitialState,
    docs: sidebarComponents as SidebarDoc[],
    expanded: sidebarComponents.reduce(
      (acc, current) => ({...acc, [current.id]: true}),
      {},
    ),
  }
}

export const getPreloadedState = () => {
  return {
    sidebar: getSidebarState(),
  }
}