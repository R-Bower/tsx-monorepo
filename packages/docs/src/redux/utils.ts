import sidebarComponents from "~components/page-layout/sidebar/search/components.json"
import {
  SidebarDocGroup,
  sidebarInitialState,
} from "~components/page-layout/sidebar/sidebarSlice"

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

export const getPreloadedState = () => {
  return {
    sidebar: getSidebarState(),
  }
}
