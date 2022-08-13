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
      options: ['primary', 'secondary']
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
