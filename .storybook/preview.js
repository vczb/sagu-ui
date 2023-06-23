import { ThemeProvider } from "styled-components"
import theme from '../src/styles/theme'
import { wine } from '../src/styles/theme/wine'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => {
    // Object.assign(theme.colors, wine)
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story/>
      </ThemeProvider>
    )
  }]
