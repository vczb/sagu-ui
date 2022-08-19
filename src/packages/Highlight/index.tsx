import React from 'react'
import * as S from './styles'

export type HighlightProps = {
  helperText?: string
  title: number | string
  subtitle: string
}

const Highlight = ({
  helperText = 'your stay in one of',
  title,
  subtitle
}: HighlightProps) => (
  <S.Highlight>
    <S.HelperText>{helperText}</S.HelperText>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Highlight>
)

export default Highlight
