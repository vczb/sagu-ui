import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    title: 'Rio de Janeiro'
  }
} as Meta

export const Default: StoryFn<RadioProps> = (args) => <Radio {...args} />
