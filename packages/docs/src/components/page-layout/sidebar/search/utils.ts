import fuzzysearch from "fuzzysearch"
import {chain, find, map, propEq} from "rambda"

import {SidebarDoc, SidebarDocGroup, SidebarDocSubGroup} from "../sidebarSlice"

export const findSidebarElement = (
  groups: SidebarDocGroup[],
  groupId: string,
  subgroupId: string,
  id: string,
): SidebarDoc => {
  const group = find<SidebarDocGroup>(propEq("id", groupId))(groups)
  if (!group) {
    return null
  }
  const subgroup = find<SidebarDocSubGroup>(
    propEq("id", subgroupId),
    group.subgroups,
  )
  if (!subgroup) {
    return null
  }
  return find<SidebarDoc>(propEq("id", id), subgroup.elements)
}

export const collectSidebarElements = (
  groups: SidebarDocGroup[],
): readonly SidebarDoc[] => {
  return chain((doc: SidebarDocGroup) => {
    return chain((subgroup: SidebarDocSubGroup) => {
      return subgroup.elements
    }, doc.subgroups)
  }, groups)
}

export const filterSubGroups = (
  term: string,
  subgroups: SidebarDocSubGroup[],
): SidebarDocSubGroup[] => {
  return map((subgroup: SidebarDocSubGroup) => {
    if (fuzzysearch(term, subgroup.id)) {
      return subgroup
    }
    return {
      ...subgroup,
      elements: subgroup.elements.filter((element: SidebarDoc) =>
        fuzzysearch(term, element.id),
      ),
    }
  }, subgroups).filter((subgroup) => {
    return subgroup.elements.length > 0
  })
}

export const filterDocs = (
  term: string,
  docs: SidebarDocGroup[],
): SidebarDocGroup[] => {
  return map((doc: SidebarDocGroup) => {
    // return the whole sub-tree if the id matches
    if (fuzzysearch(term, doc.id)) {
      return doc
    } else {
      // search the doc's subgroups for matches
      return {...doc, subgroups: filterSubGroups(term, doc.subgroups)}
    }
  }, docs).filter((doc: SidebarDocGroup) => {
    // the map operation returns every matching root element
    return doc.subgroups.length
  })
}
