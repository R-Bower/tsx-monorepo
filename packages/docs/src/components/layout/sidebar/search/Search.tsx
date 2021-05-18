import React, {useCallback, useState} from "react"

import {Flex, Input} from "@rb/react-primitives"

import {SidebarDoc} from "../utils"
import DirectoryNode from "./DirectoryNode"

interface SearchProps {
  sidebarDocs: SidebarDoc[]
}

export default function Search({sidebarDocs}: SearchProps): JSX.Element {
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
        <DirectoryNode
          key={doc.path}
          hierarchy={doc.hierarchy}
          index={0}
          isExpanded={false}
          mdxFileName={doc.mdxFileName}
          path={doc.path}
          title={"test"}
        />
      ))}
    </Flex>
  )
}
