// Badge.stories.js | Badge.stories.ts

// Button.stories.tsx

import React from "react"

import {Story} from "@storybook/react"

import {TruncatedText, TruncatedTextProps} from "./TruncatedText"

//👇 We create a “template” of how args map to rendering
const Template: Story<TruncatedTextProps> = (args) => (
  <TruncatedText {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  label: "Primary",
  primary: true,
}
