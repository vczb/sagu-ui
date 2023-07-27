import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Sign Up',
    variant: 'filled'
  }
} as Meta

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />
