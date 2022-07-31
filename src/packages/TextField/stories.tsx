import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    value: 'Luke Skywalker',
    label: 'Name',
    placeholder: 'Type your name'
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />
