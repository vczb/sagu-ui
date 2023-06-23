import styled, { DefaultTheme, css } from 'styled-components'
import { BoxProps } from '.'

const wrapperModifier = {
  none: () => css`
    padding: none;
  `,
  xxsmall: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.large};
  `
}

export const Wrapper = styled.div<Omit<BoxProps, 'children'>>`
  ${({ theme, padding = 'small', border, shadow }) => css`
    ${!!shadow && ` box-shadow: ${theme.shadows.default};`};
    ${!!border && `border: 0.2rem solid ${theme.colors.secondary.light};`};
    width: fit-content;
    height: fit-content;
    z-index: ${theme.layers.menu};
    background: ${theme.colors.base.white};
    ${wrapperModifier[padding](theme)}
  `}
`
