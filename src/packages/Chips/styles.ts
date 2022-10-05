import styled, { css, DefaultTheme } from 'styled-components'
import { ChipsProps } from '.'

const chipsVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.medium};
    color: ${theme.colors.base.white};
    &:hover {
      background-color: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.base.white};
    &:hover {
      background-color: ${theme.colors.secondary.dark};
    }
  `,
  filled: (theme: DefaultTheme) => css``
}

export const Wrapper = styled.div<Pick<ChipsProps, 'variant' | 'outline'>>`
  ${({ theme, variant }) => css`
  border-radius: 1.6rem;
  max-width: 100%;
  height: 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${!!variant && chipsVariants[variant](theme)}}
  `}
`

export const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
`
