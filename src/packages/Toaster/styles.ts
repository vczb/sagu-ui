import styled, { css } from 'styled-components'
import Alert from '../Alert'
import { ToasterProps } from '.'

export const Toaster = styled(Alert)<
  Pick<ToasterProps, 'duration' | 'animated' | 'isFullWidth'>
>`
  ${({ theme, duration, animated, isFullWidth }) => css`
    ${animated &&
    `
    animation: moveTop ${duration! / 1000}s linear;
    position: absolute;
    width: ${isFullWidth ? '100%' : 'fit-content'};
    max-width: calc(100vw - ${theme.spacings.medium});
    left: 50%;
    transform: translateX(-50%);
    @keyframes moveTop {
      0% {
        bottom: 0;
        bottom: 50%;
        opacity: 1
      }
      50% {
        bottom: 80%;
      }
      80% {
        opacity: .8;
      }
      100% {
        opacity: 0;
        bottom: 80%;
      }
    }
    `}
  `}
`
