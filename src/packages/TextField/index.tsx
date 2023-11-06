import React from 'react'
import { InputHTMLAttributes } from 'react'

import GenericInput from '../GenericInput'

export type TextFieldProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, type = 'text', ...props }: TextFieldProps) => (
  <GenericInput {...props} label={label} type={type} />
)

export default TextField
