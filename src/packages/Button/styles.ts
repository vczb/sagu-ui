import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const buttonModifier = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.dark};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray.lightest};
    &:hover {
      background: ${theme.colors.gray.lighter};
    }
    &:active {
      background: ${theme.colors.gray.base};
      color: ${theme.colors.black};
    }
  `,
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `
}

export const Button = styled.button<Pick<ButtonProps, 'variant' | 'size'>>`
  ${({ theme, variant, size }) => css`
    border: none;
    cursor: pointer;

    border-radius: ${theme.border.radius};

    transition: ${theme.transition.default};

    ${!!variant && buttonModifier[variant](theme)};
    ${!!size && buttonModifier[size](theme)};
  `}
`
