import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type TagProps = {
  value: string
  isUppercase?: boolean
  isBold?: boolean
  isPointer?: boolean
  isSlashed?: boolean
  size?: 'xsmall' | 'small' | 'medium'
  isDarkBgOnHover?: boolean
  isDarkBg?: boolean
} & BaseHTMLAttributes<HTMLDivElement>

const Tag = ({
  value,
  isBold,
  isUppercase,
  isPointer,
  size,
  isDarkBgOnHover,
  isDarkBg,
  ...props
}: TagProps) => (
  <S.Wrapper
    isUppercase={isUppercase}
    isBold={isBold}
    isPointer={isPointer}
    size={size}
    isDarkBgOnHover={isDarkBgOnHover}
    isDarkBg={isDarkBg}
    {...props}
  >
    {value}
  </S.Wrapper>
)

export default Tag
