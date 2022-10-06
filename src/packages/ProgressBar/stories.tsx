import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ProgressBar, { ProgessBarProps } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    value: 25
  }
} as Meta

export const Default: Story<ProgessBarProps> = (args) => (
  <ProgressBar {...args} />
)

export const Customized: Story<ProgessBarProps> = (args) => (
  <ProgressBar {...args} color="#0064d6" showValue label="My progress bar" />
)

export const Indeterminate: Story<ProgessBarProps> = (args) => (
  <ProgressBar indeterminate {...args} label="Loading..." />
)
