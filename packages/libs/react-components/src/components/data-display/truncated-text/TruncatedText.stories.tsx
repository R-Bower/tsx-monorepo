// Badge.stories.js | Badge.stories.ts

import {TruncatedText} from "./TruncatedText"

export default {
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "Text shown by Badge",
      name: "Badge Content",
      table: {
        type: {
          detail: "Text displayed by the Badge",
          summary: "The label contents",
        },
      },
    },
    status: {
      control: {
        options: ["positive", "negative", "warning", "error", "neutral"],
        type: "select",
      },
      description: "Available options available to the Badge",
      name: "Badge Status",
      table: {
        defaultValue: {
          summary: "positive",
        },
        type: {
          detail: "Listing of available options",
          summary: "Shows options to the Badge",
        },
      },
    },
  },
  component: TruncatedText,
  title: "Components/TruncatedText",
}
