import styled, { css } from 'styled-components'
import { BoxProps } from '.'
import { spacingModifier } from '../../utils/spacingModifier'

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
    fullWidth
  }) => css`
    ${!!shadow && ` box-shadow: ${theme.shadows.default};`};
    ${!!border && `border: 0.2rem solid ${theme.colors.secondary.light};`};
    width: ${fullWidth ? '100%' : 'fit-content'};
    height: fit-content;
    align-items: ${alignment};
    justify-content: ${justify};
    z-index: ${theme.layers.menu};
    background: ${theme.colors.base.white};
    ${flexModifier[flex]()}
    ${spacingModifier[padding](theme, 'padding')}
    ${spacingModifier[gap](theme, 'gap')}
  `}
`
