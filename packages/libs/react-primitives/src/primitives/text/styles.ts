import {TextProps} from "./Text"

export const textStyles: {[key: string]: Partial<TextProps>} = {
  code: {fontSize: "inherit"},
  h1: {fontSize: 28, fontWeight: 600, lineHeight: "36px"},
  h2: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "32px",
  },
  h3: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
  },
  inlineCode: {
    bg: "gray.0",
    borderRadius: 2,
    fontSize: "inherit",
    lineHeight: 1.5,
    px: 1,
  },
  p: {
    fontSize: [14, 16],
    fontWeight: 400,
    lineHeight: ["20px", "24px"],
  },
  span: {
    fontSize: [14, 16],
    fontWeight: 400,
    lineHeight: ["20px", "24px"],
  },
}
