import React from "react"

import {render} from "@testing-library/react"

import {BasicSnackbar} from "./snackbar.composition"

it("should render with the correct text", () => {
  const {getByText} = render(<BasicSnackbar />)
  const rendered = getByText("hello from Snackbar")
  expect(rendered).toBeTruthy()
})
