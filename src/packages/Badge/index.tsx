import React from 'react'
import { HTMLAttributes } from 'react'
import * as S from './styles'

export type BadgeProps = {
  content: string | number
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square' | 'rectangle'
  color?: string
} & HTMLAttributes<HTMLDivElement>

const Badge: React.FC<BadgeProps> = ({
  content,
  size = 'medium',
  shape = 'square',
  color,
  ...props
}) => (
  <S.Badge size={size} shape={shape} color={color} {...props}>
    {content}
  </S.Badge>
)

export default Badge
