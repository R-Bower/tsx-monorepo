import {View, PropTypes} from "react-view"

import {Text} from "@rb/react-primitives"

export default () => (
  <View
    componentName={"Text"}
    imports={{
      "@rb/react-primitives": {
        named: ["Text"],
      },
    }}
    props={{
      children: {
        description: "Visible label.",
        type: PropTypes.ReactNode,
        value: "Hello",
      },
      disabled: {
        description: "Indicates that the button is disabled",
        type: PropTypes.Boolean,
        value: false,
      },
      onClick: {
        description: "Function called when button is clicked.",
        type: PropTypes.Function,
        value: '() => alert("click")',
      },
    }}
    scope={{
      Text,
    }}
  />
)
