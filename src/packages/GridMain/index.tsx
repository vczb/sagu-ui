import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type GridMainProps = {
  children: React.ReactNode
  size?: 'medium' | 'small' | 'mini'
  minHeight?: '70vh' | '100vh' | '100%' | 'unset'
} & BaseHTMLAttributes<HTMLDivElement>

const GridMain = ({
  children,
  size,
  minHeight = 'unset',
  ...props
}: GridMainProps) => (
  <S.Wrapper {...props} size={size} minHeight={minHeight}>
    {children}
  </S.Wrapper>
)

export default GridMain
