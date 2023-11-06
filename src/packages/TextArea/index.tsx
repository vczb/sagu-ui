import React from 'react'
import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextAreaProps = {
  label?: string
  rows?: number
  columns?: number
} & InputHTMLAttributes<HTMLInputElement>

const TextArea = ({ label, rows = 6, columns, ...props }: TextAreaProps) => (
  <S.TextArea
    {...props}
    label={label}
    type={undefined}
    generic={{
      as: 'textarea',
      props: {
        rows,
        columns
      }
    }}
  />
)

export default TextArea
