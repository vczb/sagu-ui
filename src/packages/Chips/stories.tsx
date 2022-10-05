import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Chips from '.'

export default {
  title: 'Chips',
  component: Chips,
  args: {
    variant: 'primary',
    label: 'Chips Component'
  }
} as Meta

export const Default: Story = (args) => <Chips {...args} />
