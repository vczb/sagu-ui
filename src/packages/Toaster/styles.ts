import styled, { css, DefaultTheme } from 'styled-components'
import { AlertProps } from '../Alert'

const severityShape = {
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.base.error}1f;
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.base.warning}1f;
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.base.info}1f;
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.base.success}1f;
  `
}

export const ToasterWrapper = styled.div<Pick<AlertProps, 'severity'>>`
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  z-index: 1000;

  ${({ theme, severity = 'info' }) => css`
    animation-fill-mode: forwards;
    border-radius: ${theme.border.radius};
    position: relative;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${!!severity && severityShape[severity](theme)}
  `}
`
