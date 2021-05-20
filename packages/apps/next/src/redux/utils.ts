import sidebarDocs from "~components/sidebar/sidebar-docs.json"
import {
  SidebarDocTree,
  sidebarInitialState,
} from "~components/sidebar/sidebarSlice"

const getSidebarState = () => {
  return {
    ...sidebarInitialState,
    docs: sidebarDocs as SidebarDocTree[],
    expanded: sidebarDocs.reduce(
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
