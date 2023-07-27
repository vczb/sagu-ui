import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 32,
    subtitle: 'homes'
  }
} as Meta

export const Default: StoryFn<HighlightProps> = (args) => (
  <Highlight {...args} />
)
