import React, { ChangeEvent } from 'react'
import TextContent from '../TextContent'
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
  size?: 'small' | 'medium' | 'large'
}

const Switch = ({
  label,
  colors,
  checked,
  defaultChecked = false,
  disabled = false,
  size = 'medium',
  onSwitch
}: SwitchProps) => {
  return (
    <S.Label disabled={disabled}>
      {label && (
        <TextContent size={size} disabled={disabled} value={label} tag="span" />
      )}
      <S.Input
        type="checkbox"
        colors={colors}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onSwitch}
        disabled={disabled}
        spanSize={size}
      />
      <span />
    </S.Label>
  )
}

export default Switch
