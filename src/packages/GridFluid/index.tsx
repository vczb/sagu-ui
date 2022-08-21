import React from 'react'
import * as S from './styles'

type GridFluidProps = {
  children: React.ReactNode
}

const GridFluid = ({ children }: GridFluidProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default GridFluid
