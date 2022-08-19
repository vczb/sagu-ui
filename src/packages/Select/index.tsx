import React, { useState, useRef } from 'react'
import TextField from '../TextField'
import Paper from '../Paper'
import { useOnClickOutside, useOnKeypress } from '../../hooks'

import * as S from './styles'

export type SelectProps = {
  label: string
  active?: boolean
  children: React.ReactNode
  fieldValue?: string
  fieldPlaceholder?: string
}

const Select = ({
  label,
  children,
  active = false,
  fieldValue = '',
  fieldPlaceholder = 'Select...'
}: SelectProps) => {
  const [isActive, setIsActive] = useState(active)
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => {
    setIsActive(false)
  })

  useOnKeypress('Escape', () => {
    setIsActive(false)
  })

  return (
    <S.Select ref={ref}>
      <S.SelectButton
        active={isActive}
        aria-label={`Click to ${isActive ? 'close' : 'open'} Select`}
        onClick={() => setIsActive(!isActive)}
      >
        <TextField
          label={label}
          readOnly={true}
          value={fieldValue}
          title={fieldValue}
          placeholder={fieldPlaceholder}
        />
      </S.SelectButton>

      <Paper active={isActive} placement="bottom">
        {children}
      </Paper>
    </S.Select>
  )
}

export default Select
