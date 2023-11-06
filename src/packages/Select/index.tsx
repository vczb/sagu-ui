import React, { useMemo } from 'react'
import { GenericInputProps } from '../GenericInput'

import * as S from './styles'

export type SelectProps = {
  options: string[]
} & GenericInputProps

const Select = ({ options, ...props }: SelectProps) => {
  const selectOptions = useMemo(() => {
    return options.map((item) => <option key={item}>{item}</option>)
  }, [options])

  return (
    <S.Select
      {...props}
      type={undefined}
      generic={{
        as: 'select',
        props: {
          children: selectOptions
        }
      }}
    />
  )
}

export default Select
