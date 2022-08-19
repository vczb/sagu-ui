import React from 'react'
import { InputHTMLAttributes, useState } from 'react'
import { Minus, Plus } from '../../icons'

import * as S from './styles'

export type NumberFieldProps = {
  initialValue?: number
  max?: number
  min?: number
  onUpdate?: (value: number) => void
} & InputHTMLAttributes<HTMLInputElement>

const NumberField = ({
  initialValue = 0,
  min = 0,
  max = 99,
  onUpdate,
  ...props
}: NumberFieldProps) => {
  const [value, setValue] = useState(
    initialValue > max ? max : initialValue < min ? min : initialValue
  )
  const handleClick = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
      const newValue = value < max ? value + 1 : value
      setValue(newValue)
      !!onUpdate && onUpdate(newValue)
    } else {
      const newValue = value > min ? value - 1 : value
      setValue(newValue)
      !!onUpdate && onUpdate(newValue)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    let newValue: number = parseInt(value)

    if (newValue > max) {
      newValue = max
    } else if (newValue < min) {
      newValue = min
    }
    setValue(newValue)
    !!onUpdate && onUpdate(newValue)
  }

  return (
    <S.NumberFieldContainer>
      <S.NumberFieldButton
        onClick={() => handleClick('decrement')}
        aria-label="decrement"
        active={value > min}
      >
        <Minus />
      </S.NumberFieldButton>
      <S.NumberField
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        {...props}
      />
      <S.NumberFieldButton
        onClick={() => handleClick('increment')}
        aria-label="increment"
        active={value < max}
      >
        <Plus />
      </S.NumberFieldButton>
    </S.NumberFieldContainer>
  )
}

export default NumberField
