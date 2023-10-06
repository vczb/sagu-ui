import styled, { css, DefaultTheme } from 'styled-components'
import { TableProps } from '.'

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    border-width: ${theme.border.xxsmall}
    border-style: solid;
    border-color: ${theme.colors.primary.light};
    `}
`

export const TableHead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.colors.base.info};
  `}
`

export const TableHeaderCell = styled.th`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border: ${theme.border.mini} solid ${theme.colors.primary.dark};
  `}
`

export const TableBody = styled.tbody``

export const TableCell = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border: ${theme.border.mini} solid ${theme.colors.primary.dark};
    background-color: ${theme.colors.neutral.lighter};
    text-align: center;
  `}
`
