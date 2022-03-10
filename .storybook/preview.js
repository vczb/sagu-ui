import { ThemeProvider } from "styled-components"
import theme from '../src/styles/theme'
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
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story/>
    </ThemeProvider>
  )]
