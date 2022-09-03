import styled, { css } from 'styled-components'
import { NavLink } from '../NavLink/styles'
import { MenuProps } from '.'

export const Menu = styled.menu`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
`

export const MenuButton = styled.button<Pick<MenuProps, 'active' | 'asIcon'>>`
  ${({ theme, active, asIcon = false }) => css`
    cursor: pointer;
    border: none;
    background: transparent;
    outline: none;
    position: relative;
    width: calc(100% + ${theme.spacings.small});
    text-align: left;
    color: ${active
      ? theme.colors.secondary.medium
      : theme.colors.primary.medium};
    &:hover {
      color: ${theme.colors.secondary.medium};
    }

    ${!asIcon &&
    css`
      &::after {
        content: '';
        z-index: 0;
        color: inherit;
        position: absolute;
        border: solid currentColor;
        border-width: ${active ? '0.2rem 0 0 0.2rem' : '0 0.2rem 0.2rem 0'};
        display: inline-block;
        padding: 0.2rem;
        right: ${theme.spacings.xsmall};
        top: ${active ? '60%' : '40%'};
        transform: rotate(45deg) translateY(-50%);
        transition: color ${theme.transitions.default};
      }
    `}

    svg {
      width: auto;
      height: ${theme.spacings.medium};
      fill: ${theme.colors.primary.medium};
      transition: fill ${theme.transitions.default};
      &:hover {
        fill: ${theme.colors.secondary.medium};
      }
    }

    ${NavLink} {
      color: inherit;
      &::after {
        content: none;
      }
    }
  `}
`

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
`

export const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`
