import styled, { css, DefaultTheme } from 'styled-components'
import { AlertProps } from '.'

const severityShape = {
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.status.error}1f;
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.status.warning}1f;
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.status.info}1f;
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.status.success}1f;
  `
}

const severityIconColor = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.status.error};
  `,
  warning: (theme: DefaultTheme) => css`
    color: ${theme.colors.status.warning};
  `,
  info: (theme: DefaultTheme) => css`
    color: ${theme.colors.status.info};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.status.success};
  `
}

export const Wrapper = styled.div<Pick<AlertProps, 'severity'>>`
  ${({ theme, severity = 'info' }) => css`
    animation-fill-mode: forwards;
    border-radius: ${theme.border.radius};
    position: relative;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${!!severity && severityShape[severity](theme)}}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small}
      ${theme.spacings.xsmall} ${theme.spacings.xsmall};
  `}
`

export const Content = styled.div`
  ${() => css`
    flex-grow: 1;
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.xdarkest};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    color: ${theme.colors.neutral.xdarkest};
    line-height: 1.3;
    margin-bottom: ${theme.spacings.mini};
  `}
`

export const IconWrapper = styled.div<Pick<AlertProps, 'severity' | 'header'>>`
  ${({ theme, severity = 'info', header }) => css`
    align-self: ${header ? 'flex-start' : 'center'};
    font-size: 0;
    margin-right: ${theme.spacings.xxsmall};

    svg {
      align-items: center;
      font-size: ${header ? theme.font.sizes.xlarge : theme.font.sizes.xsmall};
      ${!!severity && severityIconColor[severity](theme)}}
    }
  `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1;
    outline: none;
    padding-top: ${theme.spacings.mini};
    position: absolute;
    right: 0;
    top: 0;
  `}
`
