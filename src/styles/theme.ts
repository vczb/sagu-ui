export default {
  container: {
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
  colors: {
    base: {
      alert: '#DC2626',
      success: '#22C55E',
      white: '#F8F7FB',
      black: '#222222',
      disabled: '#78716C'
    },
    primary: {
      lighter: '#E8EFF5',
      light: '#1C5D9F',
      medium: '#022B54',
      dark: '#01172E'
    },
    secondary: {
      lighter: '#D1EFF2',
      light: '#A3DFE6',
      medium: '#53C3D0',
      dark: '#34AEBC'
    },
    neutral: {
      lightest: '#F4F4F9',
      lighter: '#EFF0F9',
      base: '#E6E6E6',
      dark: '#B3B3B3',
      darker: '#999999',
      darkest: '#808080',
      xdarkest: '#4D4D4D'
    }
  },
  spacings: {
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
    inner: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    default: 'rgb(0 0 0 / 15%) 0px 2rem 8rem 0',
    focus: '0 0 0.5rem #53C3D0'
  }
} as const
