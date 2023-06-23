import { DefaultTheme, css } from 'styled-components'
import theme from '../../src/styles/theme'

export type SpacingKeys = keyof typeof theme.spacings

type AttributeProps = 'padding' | 'gap' | 'margin'

export const spacingModifier = {
  none: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.none};
  `,
  xmini: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.xmini};
  `,
  mini: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.mini};
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
  `,
  xlarge: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.xlarge};
  `,
  xxlarge: (theme: DefaultTheme, attribute: AttributeProps) => css`
    ${attribute}: ${theme.spacings.xxlarge};
  `
}
