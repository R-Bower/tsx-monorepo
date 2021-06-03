import {createSlice} from "@reduxjs/toolkit"

import type {RootState} from "~redux/store"

export type ViewMode = "light" | "dark" | "dark-dimmed"

// Define a type for this slice state.
export interface UIState {
  breakpoint: number
  viewMode: ViewMode
}

// Will need to resolve against the value in localStorage on refresh
// Define the initial state for this slice.
export const uiInitialState: UIState = {
  breakpoint: 1,
  viewMode: "light",
}

export const uiSlice = createSlice({
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: uiInitialState,
  name: "sidebar",
  reducers: {
    toggleViewMode: (state: UIState) => {
      state.viewMode = state.viewMode === "light" ? "dark" : "light"
      window.localStorage.setItem("uiState", JSON.stringify(state))
    },
  },
})

export const {toggleViewMode} = uiSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getViewMode = (state: RootState): ViewMode => state.ui.viewMode

export default uiSlice.reducer
