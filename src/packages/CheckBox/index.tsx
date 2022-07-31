import React from 'react'
import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type CheckBoxProps = {
  title: string
  type?: 'checkbox' | 'radio'
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({ title, type = 'checkbox', ...props }: CheckBoxProps) => (
  <S.CheckBoxLabel>
    <input type={type} {...props} />
    <span>{title}</span>
  </S.CheckBoxLabel>
)

export default CheckBox
