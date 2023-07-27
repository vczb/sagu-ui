import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import ProgressBar, { ProgessBarProps } from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  args: {
    value: 25
  }
} as Meta

export const Default: StoryFn<ProgessBarProps> = (args) => (
  <ProgressBar {...args} />
)

export const Customized: StoryFn<ProgessBarProps> = (args) => (
  <ProgressBar {...args} color="#0064d6" showValue label="My progress bar" />
)

export const Indeterminate: StoryFn<ProgessBarProps> = (args) => (
  <ProgressBar indeterminate {...args} label="Loading..." />
)
