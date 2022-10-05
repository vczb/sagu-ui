import styled, { css, keyframes } from 'styled-components'
import { ProgessBarProps } from '.'

const indeterminateAnimation = keyframes`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`

export const ProgressBarWrapper = styled.div<
  Pick<
    ProgessBarProps,
    'showValue' | 'indeterminate' | 'label' | 'value' | 'color'
  >
>`
  ${({ showValue, label }) => css`
    position: relative;
    height: ${label || showValue ? '3rem' : '0.4rem'};
    overflow: hidden;
  `}
`

export const ProgressBarBackground = styled.div<
  Pick<ProgessBarProps, 'color' | 'showValue' | 'label' | 'indeterminate'>
>`
  ${({ theme, color, showValue, label, indeterminate }) => css`
    position: absolute;
    height: 0.4rem;
    opacity: 0.3;
    background-color: ${color ? color : theme.colors.secondary.medium};
    top: ${label || (showValue && !indeterminate) ? '2.4rem' : 0};
    left: 0;
    width: 100%;
    border-radius: 0.2rem;
  `}
`

export const ProgressBar = styled.div<
  Pick<
    ProgessBarProps,
    'color' | 'showValue' | 'label' | 'value' | 'indeterminate'
  >
>`
  ${({ theme, color, showValue, label, value, indeterminate }) => css`
    position: absolute;
    top: ${label || (showValue && !indeterminate) ? '2.4rem' : 0};
    left: 0;
    height: 0.4rem;
    width: ${indeterminate ? '100%' : value ? `${value}%` : '0%'};
    animation: ${indeterminate &&
    css`
      ${indeterminateAnimation} 1s infinite linear
    `};
    transform-origin: ${indeterminate && '0% 50%'};
    border-radius: 0.2rem;
    transition: ${!indeterminate && 'width 250ms ease-in-out'};
    background-color: ${color ? color : theme.colors.secondary.medium};
  `}
`

export const ProgressBarValue = styled.span<
  Pick<ProgessBarProps, 'color' | 'indeterminate'>
>`
  ${({ theme, color, indeterminate }) => css`
    display: ${indeterminate ? 'none' : 'initial'};
    position: absolute;
    top: 0.4rem;
    color: ${color ? color : theme.colors.secondary.medium};
    right: 0;
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family.primary};
  `}
`

export const ProgressBarLabel = styled.span<Pick<ProgessBarProps, 'label'>>`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    color: ${theme.colors.base.black};
    left: 0;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.semiBold};
  `}
`
