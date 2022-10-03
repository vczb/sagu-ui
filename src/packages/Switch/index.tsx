import React, { useState } from 'react'
import { Input, Label, Switch } from '.'

export const ToggleSwitch = () => {
  const [checked, Check] = useState<boolean>(false)
  const handleChange = () => {
    if (checked === false) {
      Check(true)
    } else {
      Check(false)
    }
  }
  return (
    <Label>
      <span>Toggle is {checked ? 'on' : 'off'}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  )
}
