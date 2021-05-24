import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "~redux/store"

export interface SidebarDoc {
  id: string
  mdxFileName?: string
  url?: string
  components?: SidebarDoc[]
}

// Define a type for this slice state.
interface SidebarState {
  docs: SidebarDoc[]
  expanded: {
    [key: string]: boolean
  }
  filteredDocs: SidebarDoc[]
  searchValue: string
}

// TODO: cache sidebar state.
//  Will need to resolve against active config while loading.
// Define the initial state for this slice.
export const sidebarInitialState: SidebarState = {
  docs: [],
  expanded: {},
  filteredDocs: [],
  searchValue: "",
}

export const sidebarSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: sidebarInitialState,
  name: "sidebar",
  reducers: {
    setDocs: (state: SidebarState, action: PayloadAction<SidebarDoc[]>) => {
      state.docs = action.payload
    },
    toggleExpanded: (state: SidebarState, action: PayloadAction<string>) => {
      state.expanded[action.payload] = !state.expanded[action.payload]
    },
  },
})

export const {setDocs, toggleExpanded} = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getDocs = (state: RootState): SidebarDoc[] =>
  state.sidebar.docs
export const getFilteredDocs = (state: RootState): SidebarDoc[] =>
  state.sidebar.filteredDocs

export default sidebarSlice.reducer
