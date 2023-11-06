import styled, { css } from 'styled-components'

import Button from '../Button'

const figureArrowModifiers = {
  left: () => css`
    transform: rotate(-135deg) translate(-50%);
  `,
  right: () => css`
    transform: rotate(45deg);
  `
}

export const Container = styled.ul`
  display: flex;
  list-style-type: none;
`

export const Item = styled(Button)<{
  disabled?: boolean
}>`
  ${({ disabled }) => css`
    ${disabled ? 'pointer-events: none;' : ''}
  `}
`

export const Arrow = styled.div<{
  direction: 'left' | 'right'
  disabled: boolean
}>`
  ${({ theme, direction, disabled }) => css`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      border-right: 0.12rem solid ${theme.colors.base.black};
      border-top: 0.12rem solid ${theme.colors.base.black};
      visibility: ${disabled ? 'hidden' : 'visible'};
      ${figureArrowModifiers[direction]}
      top: ${direction === 'left' ? '-0.2rem' : 'unset'};
    }
  `}
`

export const Dots = styled(Item)`
  pointer-events: none;
`
