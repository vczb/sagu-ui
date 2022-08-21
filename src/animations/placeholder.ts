import { css } from 'styled-components'
import { theme } from './../styles'

const placeholder = css`
  color: ${theme.colors.neutral.lighter};
  background-image: linear-gradient(
    to right,
    currentColor 0%,
    ${theme.colors.neutral.medium} 20%,
    currentColor 40%,
    currentColor 100%
  );
  background-size: 80rem 14rem;
  animation: placeholder 1s linear infinite forwards;

  @keyframes placeholder {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export default placeholder
