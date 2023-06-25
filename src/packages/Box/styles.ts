import styled, { DefaultTheme, css } from 'styled-components'
import { BoxProps } from '.'
import { spacingModifier } from '../../styles/spacingModifier'

const flexModifier = {
  row: () => css`
    display: flex;
    flex-direction: row;
  `,
  column: () => css`
    display: flex;
    flex-direction: column;
  `,
  block: () => css`
    display: block;
  `,
  none: () => css`
    display: none;
  `
}

const wrapperModifier = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.base.white};
  `,
  filled: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary.medium};
  `,
  transparent: () => css`
    background: transparent;
  `
}

export const Wrapper = styled.div<Omit<BoxProps, 'children'>>`
  ${({
    theme,
    padding = 'small',
    border,
    shadow,
    flex = 'block',
    gap = 'small',
    justify,
    alignment,
    fullWidth,
    variant = 'default'
  }) => css`
    ${!!shadow && ` box-shadow: ${theme.shadows.default};`};
    ${!!border && `border: 0.2rem solid ${theme.colors.secondary.light};`};
    width: ${fullWidth ? '100%' : 'fit-content'};
    height: fit-content;
    align-items: ${alignment};
    justify-content: ${justify};
    z-index: ${theme.layers.menu};
    ${wrapperModifier[variant](theme)}
    ${flexModifier[flex]()}
    ${spacingModifier[padding](theme, 'padding')}
    ${spacingModifier[gap](theme, 'gap')}
  `}
`
