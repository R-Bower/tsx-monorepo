import Home from "~pages/index"
import {render} from "~test/test-utils"

test("Check home page", () => {
  const {getByText} = render(<Home />)
  expect(getByText("Home page")).toBeInTheDocument()
})
