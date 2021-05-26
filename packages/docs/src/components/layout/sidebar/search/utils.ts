import fuzzysearch from "fuzzysearch"
import {map} from "rambda"

import {SidebarDoc} from "../sidebarSlice"

export const filterComponents = (
  term: string,
  docs: SidebarDoc[],
): SidebarDoc[] => {
  return docs.filter((doc) => {
    if (fuzzysearch(term, doc.id)) {
      // return the whole sub-tree if the id matches
      return true
    } else if (doc.components) {
      // search nested components for a match
      return filterComponents(term, doc.components).length
    } else {
      return false
    }
  })
}

/*
 * This doesn't handle nesting beyond 3 levels deep.
 * Keeps the sidebar simpler at the cost of flexibility.
 */
export const filterDocs = (term: string, docs: SidebarDoc[]): SidebarDoc[] => {
  return map((doc: SidebarDoc) => {
    // return the whole sub-tree if the id matches
    if (fuzzysearch(term, doc.id)) {
      return doc
    } else if (doc.components) {
      // search the doc's components for a match
      const comps = filterComponents(term, doc.components)
      return {...doc, components: comps}
    } else {
      return null
    }
  }, docs).filter((doc: SidebarDoc) => {
    // the map operation returns every matching root element
    return doc.components.length
  })
}
