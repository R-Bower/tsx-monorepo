import React from "react"

import {MDXProvider} from "@mdx-js/react"

import {Grid} from "@rb/react-components"

import {ViewMode} from "~redux/reducers/ui/uiSlice"
import {useAppSelector} from "~redux/store"

import makeMDXComponents from "./MDXComponents"

export interface MDXPageWrapperProps {
  children: React.ReactNode
}

export default function MDXPageWrapper({
  children,
}: MDXPageWrapperProps): JSX.Element {
  const viewMode = useAppSelector<ViewMode>((state) => state.ui.viewMode)
  const MDXComponents = makeMDXComponents(viewMode)
  return (
    <MDXProvider components={MDXComponents}>
      <Grid
        gridTemplateColumns={"minmax(0px, 960px)"}
        maxWidth={1324}
        mx={"auto"}
        p={[4, 6, 12]}
        width={1}
      >
        {children}
      </Grid>
    </MDXProvider>
  )
}
