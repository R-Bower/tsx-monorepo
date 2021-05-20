import React, {useCallback} from "react"

import {FaCaretRight} from "@react-icons/all-files/fa/FaCaretRight"

import {Flex, Text} from "@rb/react-primitives"

import {useAppSelector} from "~lib/hooks/useSelector"
import {useAppDispatch} from "~redux/store"

import {SidebarDocTree, toggleExpanded} from "../sidebarSlice"
import FileNode from "./FileNode"

interface DirectoryNodeProps extends SidebarDocTree {
  level?: number
}

export default function DirectoryNode({
  components,
  id,
  level = 0,
}: DirectoryNodeProps): JSX.Element {
  const dispatch = useAppDispatch()
  const isExpanded = useAppSelector((state) => state.sidebar.expanded[id])
  const onClick = useCallback(() => {
    dispatch(toggleExpanded(id))
  }, [dispatch, id])
  return (
    <Flex flexDirection={"column"}>
      <Flex justifyContent={"space-between"}>
        <Text
          as={"a"}
          bg={"btn.secondary.base.bg"}
          color={["text.primary", "text.secondary"]}
          cursor={"pointer"}
          fontSize={14}
          fontWeight={600}
          my={4}
          onClick={onClick}
          pl={12 + level * 24}
          pr={24}
          py={4}
          sx={{
            "&:hover": {
              bg: "btn.secondary.hover.bg",
              color: "btn.secondary.hover.text",
              transition: "background-color 0.3s, color 0.3s",
            },
          }}
          textDecoration={"none"}
          transition={"background-color 0.3s, color 0.3s"}
          width={1}
        >
          <Flex alignItems={"center"} flex={"1 0 auto"} width={1}>
            <Flex
              alignItems={"center"}
              mr={4}
              transform={`rotate(${isExpanded ? "90deg" : 0})`}
              transformOrigin={"center"}
              transition={"transform 0.3s"}
            >
              <FaCaretRight color={"inherit"} size={16} />
            </Flex>
            <Text as={"h5"}>{id}</Text>
          </Flex>
        </Text>
      </Flex>
      {isExpanded && components ? (
        <Flex flexDirection={"column"}>
          {components.map((doc: SidebarDocTree) => {
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
