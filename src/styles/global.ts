import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

type GlobalStylesProps = {
  globalFontFamily?: string
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme, globalFontFamily }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${globalFontFamily || theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
