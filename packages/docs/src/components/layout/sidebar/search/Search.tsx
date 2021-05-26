import React, {useCallback, useEffect, useState} from "react"

import {Flex, Input, Text} from "@rb/react-components"

import {useAppSelector} from "~lib/hooks/useSelector"

import {SidebarDoc} from "../sidebarSlice"
import DirectoryNode from "./DirectoryNode"
import {filterDocs} from "./utils"

export default function Search(): JSX.Element {
  const sidebarDocs = useAppSelector<SidebarDoc[]>(
    (state) => state.sidebar.docs,
  )
  const [inputValue, setInputValue] = useState<string>("")
  const [filteredDocs, setFilteredDocs] = useState<SidebarDoc[]>(sidebarDocs)

  useEffect(() => {
    if (sidebarDocs.length && !inputValue) {
      setFilteredDocs(sidebarDocs)
    }
  }, [inputValue, sidebarDocs])

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value
      setInputValue(value)
      const docs = filterDocs(value, sidebarDocs)
      setFilteredDocs(docs)
    },
    [sidebarDocs],
  )

  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"} py={6}>
      <Text as={"h5"} mb={4} pl={6} pr={2}>
        Components
      </Text>
      <Input
        mb={4}
        mx={5}
        onChange={onInputChange}
        placeholder={"Search..."}
        value={inputValue}
      />
      {filteredDocs.map((doc) => (
        <DirectoryNode
          key={doc.id}
          components={doc.components}
          id={doc.id}
          level={0}
        />
      ))}
    </Flex>
  )
}
