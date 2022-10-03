import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${Switch} {
    background: #112ace;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`

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
