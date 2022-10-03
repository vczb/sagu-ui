import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type AvatarProps = {
  children: React.ReactNode
  src?: string
  alt?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  variant?: 'circle' | 'square' | 'rounded'
} & BaseHTMLAttributes<HTMLDivElement>

const Avatar = ({
  children,
  src,
  alt,
  size,
  variant,
  ...props
}: AvatarProps) => (
  <S.Wrapper size={size} variant={variant} {...props}>
    {src ? <S.Img src={src} alt={alt} /> : children}
  </S.Wrapper>
)

export default Avatar
