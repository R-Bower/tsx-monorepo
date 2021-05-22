import React from "react"

import "@testing-library/jest-dom/extend-expect"

import {Box} from "@rb/react-primitives"

import {render, screen} from "../../../test/test-utils"
import {TruncatedText} from "./TruncatedText"

const loremIpsum =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."

describe("Truncated Text", () => {
  it("Hello", () => {
    render(
      <Box height={300} width={300}>
        <TruncatedText as={"h3"} maxLines={[2]}>
          {loremIpsum}
        </TruncatedText>
      </Box>,
    )

    expect(screen.getByText(loremIpsum)).toBeInTheDocument()
  })
})
