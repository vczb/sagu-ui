import React from 'react'
import { LabelHTMLAttributes } from 'react'
import * as S from './styles'

export type LabelProps = {
  title?: string
  children?: React.ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ title, children, ...props }: LabelProps) => (
  <S.Label {...props}>
    {title && <S.Title>{title}</S.Title>}
    {children}
  </S.Label>
)

export default Label
