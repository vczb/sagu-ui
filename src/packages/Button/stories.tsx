import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Sign Up',
    variant: 'primary'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    outline: {
      control: false
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Button {...args} outline={false} />
)

export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args} outline={true} />
)
