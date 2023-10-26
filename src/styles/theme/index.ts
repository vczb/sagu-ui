import colors from './colors'

export default {
  container: {
    mini: '30rem',
    small: '60rem',
    medium: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    mini: '0.2rem',
    xxsmall: '0.3rem'
  },
  font: {
    family: {
      primary:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    },
    weights: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    }
  },
  colors,
  spacings: {
    none: '0',
    xmini: '0.2rem',
    mini: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  width: {
    medium: '1em'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadows: {
    default: 'rgb(0 0 0 / 15%) 0px 2rem 8rem 0',
    focus: `0 0 0.5rem ${colors.secondary.medium}`
  },
  avatarSizes: {
    large: '6rem',
    medium: '4rem',
    small: '3rem',
    xsmall: '2rem'
  }
} as const
