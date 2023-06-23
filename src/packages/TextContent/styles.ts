import styled, { DefaultTheme, css } from 'styled-components'
import { TextContentProps } from '.'

const colorModifier = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.base.white};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.base.black};
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.medium};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary.medium};
  `
}

export const Text = styled.p<
  Pick<TextContentProps, 'size' | 'disabled' | 'color'>
>`
  ${({ theme, disabled = false, size = 'small', color = 'black' }) => css`
    font-size: ${theme.font.sizes[size]};
    ${disabled
      ? `color: ${theme.colors.base.disabled};`
      : colorModifier[color](theme)};
  `}
`
