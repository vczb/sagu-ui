import React from 'react'
import * as S from './styles'

export type ChipsProps = {
  variant?: 'primary' | 'secondary' | 'filled'
  label: string
  outline?: boolean
}

const Chips = ({ variant = 'primary', label, outline }: ChipsProps) => (
  <S.Wrapper variant={variant} outline={outline}>
    <S.Label>{label}</S.Label>
  </S.Wrapper>
)

export default Chips
