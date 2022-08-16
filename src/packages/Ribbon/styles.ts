import styled, { css, DefaultTheme } from 'styled-components'

import { RibbonProps, RibbonColors } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color].dark};
    &::before {
      border-left-color: ${theme.colors[color].dark};
      border-top-color: ${theme.colors[color].dark};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.base.white};
    z-index: ${theme.layers.base};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
