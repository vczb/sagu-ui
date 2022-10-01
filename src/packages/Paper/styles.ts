import styled, { css, DefaultTheme } from 'styled-components'
import { PaperProps } from '.'

const paperModifiers = {
  bottom: (theme: DefaultTheme) => css`
    left: 0;
    top: calc(100% + ${theme.spacings.xxsmall});
  `,
  left: (theme: DefaultTheme) => css`
    top: 0;
    right: calc(100% + ${theme.spacings.xxsmall});
  `,
  right: (theme: DefaultTheme) => css`
    top: 0;
    left: calc(100% + ${theme.spacings.xxsmall});
  `
}

export const Paper = styled.div<Pick<PaperProps, 'active' | 'placement'>>`
  ${({ theme, active, placement }) => css`
    position: absolute;
    box-shadow: ${theme.shadows.default};
    border: 0.2rem solid ${theme.colors.secondary.light};
    display: ${active ? 'block' : 'none'};
    width: fit-content;
    height: fit-content;
    z-index: ${theme.layers.menu};
    background: ${theme.colors.base.white};
    ${paperModifiers[placement](theme)}
  `}
`
