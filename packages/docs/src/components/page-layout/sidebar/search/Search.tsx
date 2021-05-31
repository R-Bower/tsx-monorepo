import React, {useCallback, useEffect, useState} from "react"

import {Flex, TextInput} from "@rb/react-components"

import {useAppSelector} from "~redux/store"

import {SidebarDocGroup} from "../sidebarSlice"
import SidebarGroup from "./SidebarGroup"
import {filterDocs} from "./utils"

export default function Search(): JSX.Element {
  const sidebarDocs = useAppSelector<SidebarDocGroup[]>(
    (state) => state.sidebar.docs,
  )
  const [inputValue, setInputValue] = useState<string>("")
  const [filteredDocs, setFilteredDocs] =
    useState<SidebarDocGroup[]>(sidebarDocs)

  useEffect(() => {
    // default to showing all docs if no input value
    if (!inputValue) {
      setFilteredDocs(sidebarDocs)
    }
  }, [inputValue, sidebarDocs])

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value
      setInputValue(value)
      const docs = filterDocs(value.toLowerCase(), sidebarDocs)
      setFilteredDocs(docs)
    },
    [sidebarDocs],
  )

  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"} py={6}>
      <TextInput
        mb={2}
        mx={5}
        onChange={onInputChange}
        placeholder={"Search..."}
        value={inputValue}
        variant={"primary"}
      />
      {filteredDocs.map((doc) => (
        <SidebarGroup key={doc.id} {...doc} />
      ))}
    </Flex>
  )
}
