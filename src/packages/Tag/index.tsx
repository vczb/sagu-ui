import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type TagProps = {
  value: string
  isUppercase?: boolean
  isBold?: boolean
  isPointer?: boolean
  isSlashed?: boolean
  size?: 'xsmall' | 'small' | 'medium'
  hovered?: boolean
  isSelected?: boolean
} & BaseHTMLAttributes<HTMLDivElement>

const Tag = ({
  value,
  isBold,
  isUppercase,
  isPointer,
  size,
  hovered,
  isSelected,
  ...props
}: TagProps) => (
  <S.Wrapper
    isUppercase={isUppercase}
    isBold={isBold}
    isPointer={isPointer}
    size={size}
    hovered={hovered}
    isSelected={isSelected}
    {...props}
  >
    {value}
  </S.Wrapper>
)

export default Tag
