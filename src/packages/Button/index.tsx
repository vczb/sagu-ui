import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { SpacingKeys } from '../../utils/spacingModifier'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'filled'
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  padding?: SpacingKeys
  outline?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({
  children,
  variant = 'primary',
  size,
  padding,
  outline = true,
  ...props
}: ButtonProps) => (
  <S.Button
    size={size}
    variant={variant}
    outline={outline}
    padding={padding}
    {...props}
  >
    {children}
  </S.Button>
)

export default Button
