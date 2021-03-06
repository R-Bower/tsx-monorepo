import {
  configureStore,
  EnhancedStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {Context, createWrapper, MakeStore} from "next-redux-wrapper"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

import sidebarReducer from "~components/page-layout/sidebar/sidebarSlice"

import uiReducer from "./reducers/ui/uiSlice"
import {getPreloadedState} from "./utils"

const devMode = process.env.NODE_ENV === "development"

const store = configureStore({
  devTools: devMode,
  middleware: [...getDefaultMiddleware()],
  preloadedState: getPreloadedState(),
  reducer: {sidebar: sidebarReducer, ui: uiReducer},
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
// Export hooks that can be reused to resolve types
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
