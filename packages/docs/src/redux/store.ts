import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {Context, createWrapper, MakeStore} from "next-redux-wrapper"
import {useDispatch} from "react-redux"

import sidebarReducer from "~components/page-layout/sidebar/sidebarSlice"

import {getPreloadedState} from "./utils"

const devMode = process.env.NODE_ENV === "development"

const store = configureStore({
  devTools: devMode,
  middleware: [...getDefaultMiddleware()],
  preloadedState: getPreloadedState(),
  reducer: {sidebar: sidebarReducer},
})

const setupStore = (context: Context): EnhancedStore => store

// Context could be NextPageContext or AppContext or getStaticProps or getServerSideProps context depending on which lifecycle function you will wrap.
const makeStore: MakeStore = (context) => setupStore(context)

export const nextReduxWrapper = createWrapper(makeStore, {
  debug: devMode,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
