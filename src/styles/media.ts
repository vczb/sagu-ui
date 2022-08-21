import { css } from 'styled-components'

type Breakpoints = {
  [key: string]: string
}

const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const media = Object.keys(breakpoints).reduce((acc: any, view) => {
  acc[view] = (args: string) => css`
    @media (min-width: ${breakpoints[view]}) {
      ${args};
    }
  `
  return acc
}, {})

export default media
