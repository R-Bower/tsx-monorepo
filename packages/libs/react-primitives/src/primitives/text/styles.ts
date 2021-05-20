import {TextProps} from "./Text"

export const defaultStyles: {[key: string]: Partial<TextProps>} = {
  h1: {fontSize: 32, fontWeight: 600, lineHeight: "48px"},
  h2: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: "44px",
  },
  h3: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "32px",
  },
  h4: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: "24px",
  },
  h5: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
  },
  h6: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
  },
  p: {
    fontSize: [14, 16],
    fontWeight: 400,
    lineHeight: ["20px", "24px"],
  },
}
