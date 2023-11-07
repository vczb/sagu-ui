import React from 'react'
import { AnchorHTMLAttributes } from 'react'
import { SpacingKeys } from '../../styles/spacingModifier'
import * as S from './styles'

export type NavLinkProps = {
  children: React.ReactNode | string
  active?: boolean
  disabled?: boolean
  size: 'small' | 'medium' | 'large'
  padding?: SpacingKeys
} & AnchorHTMLAttributes<HTMLAnchorElement>
const NavLink = ({
  children,
  active = false,
  disabled = false,
  size = 'medium',
  padding = 'xsmall',
  ...props
}: NavLinkProps) => (
  <S.NavLink
    aria-disabled={disabled}
    active={active}
    size={size}
    padding={padding}
    disabled={disabled}
    {...props}
  >
    {children}
  </S.NavLink>
)

export default NavLink
