import React, {useCallback, useState} from "react"

import {Flex, Input} from "@rb/react-primitives"

import {useAppSelector} from "~lib/hooks/useSelector"

import {SidebarDocTree} from "../sidebarSlice"
import DirectoryNode from "./DirectoryNode"

export default function Search(): JSX.Element {
  const sidebarDocs = useAppSelector<SidebarDocTree[]>(
    (state) => state.sidebar.docs,
  )
  const [inputValue, setInputValue] = useState<string>()

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value
      setInputValue(value)
    },
    [],
  )

  return (
    <Flex flex={"1 0 auto"} flexDirection={"column"} py={16}>
      <Input
        mb={16}
        mx={16}
        onChange={onInputChange}
        placeholder={"Search..."}
        value={inputValue}
      />
      {sidebarDocs.map((doc) => (
        <DirectoryNode key={doc.id} components={doc.components} id={doc.id} />
      ))}
    </Flex>
  )
}
