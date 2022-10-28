import styled, { css } from 'styled-components'
import { placeholder } from '../../animations/'
import { SliderProps } from '.'
import { DotType } from './Dot'

// Why 20px?
// dotsHeight = 8px, if we set dotsSpace to 20px, so we have a two-side (top, bottom) space is 6px.
// It's good enough to users see dots clearly
const dotsHeight = '8px'
const dotsSpace = '20px'

// 20px is for the height of the dots
const figureModifiers = {
  small: (dots?: boolean) => css`
    max-width: 40rem;
    height: ${dots ? `calc(20rem + ${dotsSpace})` : '20rem'};
  `,
  large: (dots?: boolean) => css`
    max-width: 80rem;
    height: ${dots ? `calc('40rem' + ${dotsSpace})` : '40rem'};
  `
}

export const Figure = styled.figure<Pick<SliderProps, 'size' | 'dots'>>`
  ${({ size, dots }) => css`
    position: relative;
    overflow-x: hidden;
    height: max-content;
    ${!!size && figureModifiers[size](dots)}
  `}
`

export const Loading = styled.div<Pick<SliderProps, 'size' | 'dots'>>`
  ${({ size, dots }) => css`
    ${!!size && figureModifiers[size](dots)}
    ${placeholder}
  `}
`

export const Image = styled.img<{
  active?: boolean
  position: number
  dots: boolean
}>`
  ${({ theme, active, position, dots }) => css`
    position: absolute;
    width: 100%;
    height: ${dots ? `calc(100% - ${dotsSpace})` : '100%'};
    transition: transform ${theme.transitions.default};
    transform: translateX(${active ? 0 : position * 100 + '%'});
    object-fit: cover;
    border-radius: ${theme.border.mini};

    ${placeholder}
  `}
`

export const SlideButton = styled.button<{ dots: boolean }>`
  ${({ theme, dots }) => css`
    position: absolute;
    top: ${dots ? `calc(50% - ${dotsSpace}/2)` : '50%'};
    transform: translateY(-50%) rotate(270deg);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${theme.colors.neutral.lightest};
    border: none;
    outline: none;
    cursor: pointer;
    color: ${theme.colors.primary.light};
    transition: all ${theme.transitions.default};
    opacity: 0.7;

    &:hover,
    &:focus {
      box-shadow: ${theme.shadows.focus};
      opacity: 1;
      color: ${theme.colors.neutral.darkest};
    }
    &:first-of-type {
      left: ${theme.spacings.xsmall};
    }
    &:last-of-type {
      right: ${theme.spacings.xsmall};
    }
    &:disabled {
      opacity: 0.2;
      cursor: default;
    }
  `}
`

export const Dots = styled.div`
  ${() => css`
    display: inline-flex;
    position: absolute;
    bottom: calc((${dotsSpace} - ${dotsHeight}) / 2);
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const Dot = styled.div<Pick<DotType, 'active'>>`
  ${({ theme, active }) => css`
    width: ${dotsHeight};
    height: ${dotsHeight};
    border-radius: 50%;
    background-color: ${active
      ? theme.colors.primary.dark
      : theme.colors.neutral.darker};
    margin-right: ${theme.spacings.xxsmall};

    :last-child {
      margin-right: 0;
    }
  `}
`
