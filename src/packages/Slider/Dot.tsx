import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type DotType = {
  onClick: (index: number) => void
  active: boolean
} & BaseHTMLAttributes<HTMLDivElement>

const Dot = ({ onClick, active }: DotType) => {
  return <S.Dot onClick={onClick} active={active} />
}

export default Dot
