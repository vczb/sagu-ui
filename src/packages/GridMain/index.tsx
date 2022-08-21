import React from 'react'
import * as S from './styles'

export type GridMainProps = {
  children: React.ReactNode
  size?: 'medium' | 'small'
}

const GridMain = ({ children, size }: GridMainProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
)

export default GridMain
