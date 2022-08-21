import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'filled'
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  outline?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({
  children,
  variant = 'primary',
  size,
  outline = true,
  ...props
}: ButtonProps) => (
  <S.Button size={size} variant={variant} outline={outline} {...props}>
    {children}
  </S.Button>
)

export default Button
