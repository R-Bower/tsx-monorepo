import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "~redux/store"

export interface SidebarDocTree {
  id: string
  mdxFileName?: string
  url?: string
  components?: SidebarDocTree[]
}

// Define a type for this slice state.
interface SidebarState {
  docs: SidebarDocTree[]
  expanded: {
    [key: string]: boolean
  }
  filteredDocs: SidebarDocTree[]
  searchValue: string
}

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
    setDocs: (state: SidebarState, action: PayloadAction<SidebarDocTree[]>) => {
      state.docs = action.payload
    },
    toggleExpanded: (state: SidebarState, action: PayloadAction<string>) => {
      state.expanded[action.payload] = !state.expanded[action.payload]
    },
  },
})

export const {setDocs, toggleExpanded} = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getDocs = (state: RootState): SidebarDocTree[] =>
  state.sidebar.docs
export const getFilteredDocs = (state: RootState): SidebarDocTree[] =>
  state.sidebar.filteredDocs

export default sidebarSlice.reducer
