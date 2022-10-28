import React, { ChangeEvent } from 'react'
import * as S from './styles'

export type Colors = {
  dot?: string
  bgUnchecked?: string
  bgChecked?: string
}

export type SwitchProps = {
  label?: string
  colors?: Colors
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onSwitch?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Switch = ({
  label,
  colors,
  checked,
  defaultChecked = false,
  disabled = false,
  onSwitch
}: SwitchProps) => {
  return (
    <>
      <S.Label>
        <S.Span colors={colors} disabled={disabled}>
          {label}
        </S.Span>
        <S.Input
          type="checkbox"
          colors={colors}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onSwitch}
          disabled={disabled}
        />
        <S.Switch colors={colors} disabled={disabled} />
      </S.Label>
    </>
  )
}

export default Switch
