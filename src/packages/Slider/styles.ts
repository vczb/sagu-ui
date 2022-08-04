import styled, { css } from 'styled-components'
import { placeholder } from '../../animations/'
import { SliderProps } from '.'

const figureModifiers = {
  small: () => css`
    max-width: 40rem;
    height: 20rem;
  `,
  large: () => css`
    max-width: 80rem;
    height: 40rem;
  `
}

export const Figure = styled.figure<Pick<SliderProps, 'size'>>`
  ${({ size }) => css`
    position: relative;
    overflow: hidden;
    ${!!size && figureModifiers[size]()}
  `}
`

export const Loading = styled.div<Pick<SliderProps, 'size'>>`
  ${({ size }) => css`
    ${!!size && figureModifiers[size]()}
    ${placeholder}
  `}
`

export const Image = styled.img<{ active?: boolean; position: number }>`
  ${({ theme, active, position }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform ${theme.transitions.default};
    transform: translateX(${active ? 0 : position * 100 + '%'});
    object-fit: cover;
    border-radius: ${theme.border.mini};

    ${placeholder}
  `}
`

export const SlideButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
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
