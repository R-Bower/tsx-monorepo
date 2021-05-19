import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from "@reduxjs/toolkit"
import {Context, createWrapper, MakeStore} from "next-redux-wrapper"

import sidebarDocs from "~components/sidebar/sidebar-docs.json"
import sidebarReducer, {SidebarDoc} from "~components/sidebar/sidebarSlice"

const devMode = process.env.NODE_ENV === "development"

const store = configureStore({
  devTools: devMode,
  middleware: [...getDefaultMiddleware()],
  preloadedState: {
    sidebar: {
      docs: sidebarDocs as SidebarDoc[],
    },
  },
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
