import { BaseHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { Select } from '../Select/styles'

export type NoOptionsProps = {
    size?: 'xsmall' | 'small' | 'medium'
} & BaseHTMLAttributes<HTMLDivElement>

export const AutoComplete = styled(Select)`${() => css`display: flex;
  flex-direction: row;
  align-items: center;
  `}`

export const NoOptionsWrapper = styled.div<Pick<NoOptionsProps, 'size'>>`
  ${({
    theme,
    size = 'small'
}) => css`
    padding: ${theme.spacings.mini} ${theme.spacings.xxsmall};
    color: ${theme.colors.neutral.darkest};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
  `}
`

const figureArrowModifiers = {
    up: css`
    transform: rotate(-45deg);
  `,
    down: css`
    transform: rotate(135deg);
  `
};

export const AutoCompleteArrow = styled.div<{
    direction: 'up' | 'down'
    show: boolean
}>`
  ${({ theme, direction, show }) => css`
    :before {
      position: relative;
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      border-right: 2px solid ${theme.colors.secondary.medium};
      border-top: 2px solid ${theme.colors.secondary.medium};
      visibility: ${!show ? 'hidden' : 'visible'};
      ${figureArrowModifiers[direction]}
      top: ${direction === 'up' ? '-0.2rem' : 'unset'};
    }
  `}
`