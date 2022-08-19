import React from 'react'
import { AnchorHTMLAttributes } from 'react'
import * as S from './styles'

export type NavLinkProps = {
  children: React.ReactNode | string
  active?: boolean
  size: 'small' | 'medium' | 'large'
} & AnchorHTMLAttributes<HTMLAnchorElement>
const NavLink = ({
  children,
  active = false,
  size = 'medium',
  ...props
}: NavLinkProps) => (
  <S.NavLink active={active} size={size} {...props}>
    {children}
  </S.NavLink>
)

export default NavLink
