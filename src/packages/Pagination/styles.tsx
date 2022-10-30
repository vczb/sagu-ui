import styled, { css } from 'styled-components'
import { Colors } from '.'
import { theme } from '../../styles'

const figureArrowModifiers = {
  left: () => css`
    transform: rotate(-135deg) translate(-50%);
  `,
  right: () => css`
    transform: rotate(45deg);
  `
}

const pageColor = {
  default: (colors?: Colors) => css`
    background-color: ${colors && colors.page
      ? colors.page
      : theme.colors.neutral.medium};
  `,
  hover: (colors?: Colors) => css`
    background-color: ${colors && colors.hover
      ? colors.hover
      : theme.colors.neutral.medium};
  `
}

export const Container = styled.ul`
  display: flex;
  list-style-type: none;
`

export const Item = styled.li<{
  selected?: boolean
  disabled?: boolean
  colors?: {
    page?: string
    hover?: string
  }
}>`
  ${({ theme, selected, disabled, colors }) => css`
    padding: 0 1.2rem;
    height: 3.6rem;
    text-align: center;
    margin: auto ${theme.spacings.mini};
    color: ${theme.colors.base.black};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071rem;
    border-radius: 1.8rem;
    line-height: 1.5;
    font-size: ${theme.font.sizes.small};
    min-width: 3.6rem;

    :hover {
      ${pageColor['hover'](colors)}
      cursor: pointer;
    }

    ${selected ? pageColor['default'](colors) : ''}
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
  :hover {
    background-color: transparent;
    cursor: default;
  }
`
