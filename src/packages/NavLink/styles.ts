import styled, { css } from 'styled-components'
import { NavLinkProps } from '.'

export const NavLink = styled.a<Pick<NavLinkProps, 'active' | 'size'>>`
  ${({ theme, active, size }) => css`
    position: relative;
    cursor: pointer;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
    color: ${active
      ? theme.colors.secondary.medium
      : theme.colors.primary.medium};
    transition: ${theme.transitions.default};
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    &:hover {
      color: ${theme.colors.secondary.medium};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 2rem;
      height: 0.1rem;
      background: ${active ? theme.colors.secondary.medium : 'transparent'};
      left: 50%;
      transform: translateX(-50%);
      transition: ${theme.transitions.default};
    }
  `}
`
