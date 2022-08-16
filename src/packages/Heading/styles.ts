import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps, lineColors } from '.'

export const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: DefaultTheme, lineColor: lineColors) => css`
    padding-left: ${theme.spacings.xsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor].medium};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: lineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor].medium};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
    color: ${theme.colors.base[color!]};

    ${lineLeft && WrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && WrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && WrapperModifiers[size](theme)}
  `}
`
