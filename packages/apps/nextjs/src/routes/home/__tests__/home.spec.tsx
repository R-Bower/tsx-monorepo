import Home from "~pages/index"
import {render} from "~test/test-utils"

test("Check for Getting Started Text", () => {
  const {getByText} = render(<Home />)
  expect(getByText("Home page")).toBeInTheDocument()
})
