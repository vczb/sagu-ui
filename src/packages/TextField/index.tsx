import React from 'react'
import { InputHTMLAttributes } from 'react'

import GenericInput from '../GenericInput'

export type TextFieldProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, ...props }: TextFieldProps) => (
  <GenericInput {...props} label={label} type="text" />
)

export default TextField
