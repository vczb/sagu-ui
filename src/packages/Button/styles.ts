import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { spacingModifier } from '../../utils/spacingModifier'

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
  `,
  filled: (theme: DefaultTheme) => css`
    color: ${theme.colors.base.white};
    background: ${theme.colors.primary.medium};

    &:hover {
      background: ${theme.colors.primary.dark};
    }
    &:active {
      background: ${theme.colors.primary.medium};
    }
  `
}

export const Button = styled.button<
  Pick<ButtonProps, 'variant' | 'outline' | 'size' | 'padding'>
>`
  ${({ theme, variant, outline, size = 'small', padding = 'xsmall' }) => css`
    cursor: pointer;
    border: ${outline ? '0.2rem solid' : 'none'} ;
    background-color: transparent;
    font-weight: ${theme.font.weights.bold};
    border-radius: ${theme.border.radius};
    transition: ${theme.transitions.default};
    font-size: ${theme.font.sizes[size]};
    ${spacingModifier[padding](theme, 'padding')}
    ${!!variant && buttonVariants[variant](theme)}}
  `}
`
