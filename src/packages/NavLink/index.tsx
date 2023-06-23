import React from 'react'
import { AnchorHTMLAttributes } from 'react'
import { SpacingKeys } from '../../utils/spacingModifier'
import * as S from './styles'

export type NavLinkProps = {
  children: React.ReactNode | string
  active?: boolean
  size: 'small' | 'medium' | 'large'
  padding?: SpacingKeys
} & AnchorHTMLAttributes<HTMLAnchorElement>
const NavLink = ({
  children,
  active = false,
  size = 'medium',
  padding,
  ...props
}: NavLinkProps) => (
  <S.NavLink active={active} size={size} padding={padding} {...props}>
    {children}
  </S.NavLink>
)

export default NavLink
