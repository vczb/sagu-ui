import styled, { css, DefaultTheme } from 'styled-components'
import { RangeLabel, RangeProps } from '.'

const variants = {
  simple: (theme: DefaultTheme, min: number, max: number, val: number) => css`
    background: ${theme.colors.secondary.lighter};
    background-image: linear-gradient(
      ${theme.colors.secondary.medium},
      ${theme.colors.secondary.medium}
    );
    background-size: ${((val - min) * 100) / (max - min)}% 100%;
    background-repeat: no-repeat;
    height: 0.3rem;
    -webkit-appearance: none;
    position: absolute;
    top: 4rem;
    left: 2.5%;
    width: 105%;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      cursor: pointer;
      background: ${theme.colors.secondary.medium};
      box-sizing: border-box;
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      border: 0.3rem solid ${theme.colors.secondary.medium};
      cursor: pointer;
      background: ${theme.colors.secondary.medium};
      box-sizing: border-box;
    }

    &:focus::-webkit-slider-thumb,
    &:focus::-moz-range-thumb {
      border: 0.4rem solid ${theme.colors.secondary.lighter};
      height: 2rem;
      width: 2rem;
    }

    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      width: 100%;
      height: 0.3rem;
      cursor: pointer;
      background: transparent;
      border-radius: 0.5rem;
    }
  `,
  range: (theme: DefaultTheme) => css`
    pointer-events: none;
    position: absolute;
    appearance: none;
    background: transparent;
    left: 0;
    top: 4rem;
    width: 100%;
    z-index: 10;
    -webkit-appearance: none;

    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      background: ${theme.colors.secondary.medium};
    }
    &::-moz-range-thumb {
      -moz-appearance: none;
      pointer-events: all;
      position: relative;
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      border: none;
      background: ${theme.colors.secondary.medium};
    }

    &:focus::-moz-range-thumb,
    &:focus::-webkit-slider-thumb {
      border: 0.4rem solid ${theme.colors.secondary.lighter};
      height: 2rem;
      width: 2rem;
    }
  `
}

export const RangeWrapper = styled.div<
  Pick<RangeProps, 'min' | 'max' | 'value' | 'width'>
>`
  ${({ theme, min, max, value, width }) => css`
    width: ${width}px;
    position: relative;
    margin: 0 auto 2rem;
    height: 3.5rem;
    text-align: center;

    & input[type='range'] {
      &:focus {
        outline: none;
      }
      ${Array.isArray(value)
        ? variants.range(theme)
        : variants.simple(theme, min, max, value)}
    }

    & .range-progress {
      position: absolute;
      display: flex;
      top: 4.7rem;
      width: 100%;
      height: 0.3rem;
      --max: 0;
      --min: 0;
      --full: ${max};
      background-color: ${theme.colors.secondary.lighter};

      &::before {
        content: '';
        width: calc(((var(--min) / var(--full)) * 100%));
        background-color: ${theme.colors.secondary.lighter};
      }

      &::after {
        content: '';
        width: calc(((var(--max) - var(--min)) / var(--full) * 100%));
        background-color: ${theme.colors.secondary.medium};
      }
    }
  `}
`
export const InputLabel = styled.span<Pick<RangeLabel, 'value' | 'isMultiple'>>`
  ${({ theme, value, isMultiple }) => css`
    left: calc(
      ${value}% - ${(Number(value) * (isMultiple ? 26 : 6)) / 1000}rem
    );
    top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.5rem;
    position: absolute;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.base.white};
    background: ${theme.colors.neutral.dark};
  `}
`
