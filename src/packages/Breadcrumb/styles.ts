import styled, { css } from 'styled-components'
import { BreadcrumbProps } from '.'

export const Breadcrumb = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
`

export const BreadcrumbItem = styled.li<Pick<BreadcrumbProps, 'size'>>`
  ${({ theme, size = 'small' }) => css`
    margin: 0 0.5rem;
    color: ${theme.colors.primary.medium};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes[size]};
  `}
`
