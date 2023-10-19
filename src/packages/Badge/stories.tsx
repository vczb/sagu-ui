import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Badge, { BadgeProps } from '.'

export default {
  title: 'Badge',
  component: Badge,
  args: {
    content: 'New',
    size: 'medium',
    shape: 'square'
  }
} as Meta

export const Default: StoryFn<BadgeProps> = (args) => <Badge {...args} />
