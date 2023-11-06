import React, { SelectHTMLAttributes, useMemo } from 'react'

import * as S from './styles'

export type SelectProps = {
  options: string[]
  label?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ options, label, ...props }: SelectProps) => {
  const selectOptions = useMemo(() => {
    return options.map((item) => <option key={item}>{item}</option>)
  }, [options])

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <S.Select
      {...props}
      label={label}
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
