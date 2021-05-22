import {DefaultGlobalStyle, StyledThemeProvider} from "@rb/react-primitives"
import {ThemeProvider} from "styled-components"
import {themes} from "@storybook/theming"

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: {...themes.dark, appContentBg: "#888888"}
  },
  viewMode: "docs",
}

const withThemeProvider = (Story, context) => {
  return (
    <StyledThemeProvider>
      <DefaultGlobalStyle />
      <Story {...context} />
    </StyledThemeProvider>
  )
}

export const decorators = [withThemeProvider]
