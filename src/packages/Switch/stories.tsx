import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Switch',
  component: Switch,
  args: {}
} as Meta

export const Default: Story<SwitchProps> = (args) => {
  return (
    <>
      <p>Switch without text</p>
      <Switch {...args} />
      <br />
      <p>Switch with text</p>
      <Switch {...args} label="Dark mode?" />
      <br />
      <p>Switch with defaultValue</p>
      <Switch {...args} label="Dark mode?" defaultChecked />
      <br />
    </>
  )
}

export const DisabledSwitch: Story<SwitchProps> = (args) => {
  return (
    <>
      <p>Disabled Switch without text</p>
      <Switch {...args} disabled />
      <br />
      <p>Disabled Switch with text</p>
      <Switch {...args} label="Dark mode?" disabled />
      <br />
      <p>Disabled Switch with defaultValue</p>
      <Switch {...args} label="Dark mode?" defaultChecked disabled />
      <br />
    </>
  )
}

export const CustomizedColorSwitch: Story<SwitchProps> = (args) => {
  return (
    <>
      <p>Switch without text</p>
      <Switch
        {...args}
        colors={{ dot: '#7ec4fa', bgChecked: 'purple', bgUnchecked: 'hotpink' }}
      />
      <br />
      <p>Switch with text</p>
      <Switch
        {...args}
        label="Dark mode?"
        colors={{ dot: 'beige', bgChecked: 'purple', bgUnchecked: '#81fd9c' }}
      />
      <br />
      <p>Switch with defaultValue</p>
      <Switch
        {...args}
        label="Dark mode?"
        defaultChecked
        colors={{ dot: 'green', bgChecked: 'purple', bgUnchecked: 'hotpink' }}
      />
      <br />
    </>
  )
}
