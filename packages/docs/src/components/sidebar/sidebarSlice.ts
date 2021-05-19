import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import type {RootState} from "~redux/store"

export interface SidebarDoc {
  path: string
  hierarchy: readonly string[]
  mdxFileName: string
}

// Define a type for the slice state
interface SidebarState {
  docs: SidebarDoc[]
  filteredDocs: SidebarDoc[]
  searchValue: string
}

// Define the initial state using that type
const initialState: SidebarState = {
  docs: [],
  filteredDocs: [],
  searchValue: "",
}

export const sidebarSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  name: "sidebar",
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDocs: (state: SidebarState, action: PayloadAction<SidebarDoc[]>) => {
      state.docs = action.payload
    },
  },
})

export const {setDocs} = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getDocs = (state: RootState): SidebarDoc[] => state.sidebar.docs
export const getFilteredDocs = (state: RootState): SidebarDoc[] =>
  state.sidebar.filteredDocs

export default sidebarSlice.reducer
