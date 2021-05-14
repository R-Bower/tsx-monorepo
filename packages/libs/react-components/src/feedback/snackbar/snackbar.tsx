import React from "react"

export type SnackbarProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
}

export function Snackbar({text}: SnackbarProps) {
  return <div>{text}</div>
}
