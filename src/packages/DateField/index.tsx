import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type Measure = 'date' | 'week' | 'time' | 'month' | 'datetime-local'

export type DateFieldProps = {
  isFullWidth?: boolean
  type?: Measure
} & InputHTMLAttributes<HTMLInputElement>

const DateField = ({
  isFullWidth = false,
  type = 'date',
  ...props
}: DateFieldProps) => {
  return <S.Date {...props} isFullWidth={isFullWidth} type={type} />
}

export default DateField
