import React from "react"

import {FiCheck} from "@react-icons/all-files/fi/FiCheck"
import {FiClipboard} from "@react-icons/all-files/fi/FiClipboard"
import copy from "copy-to-clipboard"

import {Button, ButtonProps} from "../../inputs/button/Button"
import {Flex} from "../../primitives/flex/Flex"

export const CodeClipboardCopy = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({value}, ref) => {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) {
        setCopied(false)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      ref={ref}
      aria-label={"Copy to clipboard"}
      bg={"bg.secondary"}
      border={"solid 1px"}
      borderColor={"border.secondary"}
      borderRadius={5}
      onClick={() => {
        copy(value.toString())
        setCopied(true)
      }}
      p={2}
    >
      {copied ? (
        <Flex alignItems={"center"} color={"icon.success"}>
          <FiCheck color={"inherit"} size={18} />
        </Flex>
      ) : (
        <Flex alignItems={"center"} color={"icon.secondary"}>
          <FiClipboard color={"inherit"} size={18} />
        </Flex>
      )}
    </Button>
  )
})
