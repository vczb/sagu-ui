import React from 'react'
import { InputHTMLAttributes } from 'react'
import Label from '../Label'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, ...props }: TextFieldProps) => (
  <Label title={label}>
    <S.TextField {...props} label={label} />
  </Label>
)

export default TextField
