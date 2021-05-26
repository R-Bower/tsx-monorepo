import React, {useCallback} from "react"

import {Flex, Text} from "@rb/react-components"

import {useAppDispatch} from "~redux/store"

import {SidebarDoc, toggleExpanded} from "../sidebarSlice"
import FileNode from "./FileNode"

interface DirectoryNodeProps extends SidebarDoc {
  level?: number
}

export default function DirectoryNode({
  components,
  id,
  level = 0,
}: DirectoryNodeProps): JSX.Element {
  const dispatch = useAppDispatch()
  const onClick = useCallback(() => {
    dispatch(toggleExpanded(id))
  }, [dispatch, id])
  return (
    <Flex flexDirection={"column"}>
      <Flex justifyContent={"space-between"}>
        <Text
          as={"a"}
          bg={"gray.0"}
          color={"text.primary"}
          fontSize={14}
          fontWeight={600}
          my={1}
          onClick={onClick}
          pl={24 + level * 12}
          pr={24}
          py={1}
          textDecoration={"none"}
          transition={"background-color 0.3s, color 0.3s"}
          width={1}
        >
          <Flex alignItems={"center"} flex={"1 0 auto"} width={1}>
            <Text as={"h5"} fontSize={14} fontWeight={600}>
              {id}
            </Text>
          </Flex>
        </Text>
      </Flex>
      {components ? (
        <Flex flexDirection={"column"}>
          {components.map((doc: SidebarDoc) => {
            const Component = doc.components ? DirectoryNode : FileNode
            return (
              <Component
                key={doc.id}
                components={doc.components}
                id={doc.id}
                level={level + 1}
                url={doc.url}
              />
            )
          })}
        </Flex>
      ) : null}
    </Flex>
  )
}
