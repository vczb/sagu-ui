import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.medium};
    color: ${theme.colors.primary.medium};
    &:hover {
      border-color: ${theme.colors.secondary.medium};
      color: ${theme.colors.secondary.medium};
    }
    &:active {
      border-color: ${theme.colors.secondary.dark};
      color: ${theme.colors.secondary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.secondary.medium};
    &:hover {
      border-color: ${theme.colors.primary.light};
      color: ${theme.colors.primary.light};
    }
    &:active {
      border-color: ${theme.colors.primary.medium};
      color: ${theme.colors.primary.medium};
    }
  `
}

export const Button = styled.button<
  Pick<ButtonProps, 'variant' | 'outline' | 'size'>
>`
  ${({ theme, variant, outline, size = 'small' }) => css`
    cursor: pointer;
    border: ${outline ? '0.2rem solid' : 'none'} ;
    background-color: transparent;
    font-weight: ${theme.font.weights.bold};
    border-radius: ${theme.border.xxsmall};
    transition: ${theme.transition.default};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes[size]};
    ${!!variant && buttonVariants[variant](theme)}}
  `}
`
