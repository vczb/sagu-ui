import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'My button'
  }
} as Meta

export const Default: Story = (args) => (
  <Button {...args}>{args.children}</Button>
)
