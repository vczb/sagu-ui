import styled, { css } from 'styled-components'
import * as NavLinkStyles from '../NavLink/styles'

export const Breadcrumb = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`

export const BreadcrumbItem = styled.li`
  ${({ theme }) => css`
    margin: 0 0.5rem;
    color: ${theme.colors.primary.medium};
    ${NavLinkStyles.NavLink} {
      padding: ${theme.spacings.mini} 0;
    }
  `}
`
