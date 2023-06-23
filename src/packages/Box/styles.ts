import styled, { DefaultTheme, css } from 'styled-components'
import { BoxProps } from '.'

type AttributeProps = 'padding' | 'gap'

const wrapperModifier = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  none: (_: unknown, attribute: AttributeProps) => css`
    ${attribute}:none;
  `,
  xxsmall: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.xxsmall};
  `,
  xsmall: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.xsmall};
  `,
  small: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.large};
  `
}

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
    gap = 'none',
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
    ${wrapperModifier[padding](theme, 'padding')}
    ${wrapperModifier[gap](theme, 'gap')}
  `}
`
