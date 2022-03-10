import React from 'react'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode | string | null
  size?: 'small' | 'medium' | 'large'
  variant?: 'light'
} & ButtonTypes

const Button = ({
  children,
  size = 'small',
  variant = 'light'
}: ButtonProps) => {
  return (
    <S.Button variant={variant} size={size}>
      {children}
    </S.Button>
  )
}

export default Button
