import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 32,
    subtitle: 'homes'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
