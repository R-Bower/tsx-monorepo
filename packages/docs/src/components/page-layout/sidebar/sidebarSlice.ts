import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "~redux/store"

export interface SidebarDoc {
  mdxBody: string
  group: string
  id: string
  mdxFileName: string
  mdxFilePath?: string
  subgroup: string
  url: string
}

export interface SidebarDocSubGroup {
  id: string
  elements: SidebarDoc[]
}

export interface SidebarDocGroup {
  id: string
  subgroups: SidebarDocSubGroup[]
}

// Define a type for this slice state.
interface SidebarState {
  docs: SidebarDocGroup[]
  mobileShowing: boolean
}

// TODO: cache sidebar state.
//  Will need to resolve against active config while loading.
// Define the initial state for this slice.
export const sidebarInitialState: SidebarState = {
  docs: [],
  mobileShowing: false,
}

export const sidebarSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: sidebarInitialState,
  name: "sidebar",
  reducers: {
    setDocs: (
      state: SidebarState,
      action: PayloadAction<SidebarDocGroup[]>,
    ) => {
      state.docs = action.payload
    },
    toggleMobileSidebar: (
      state: SidebarState,
      action?: PayloadAction<boolean>,
    ) => {
      if (action.payload === false || action.payload === true) {
        // toggle can be overridden by supplying a value
        state.mobileShowing = action.payload
      } else {
        state.mobileShowing = !state.mobileShowing
      }
    },
  },
})

export const {setDocs, toggleMobileSidebar} = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getDocs = (state: RootState): SidebarDocGroup[] =>
  state.sidebar.docs

export default sidebarSlice.reducer
