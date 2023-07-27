import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Label, { LabelProps } from '.'

export default {
  title: 'Label',
  component: Label,
  args: {
    title: 'Email'
  }
} as Meta

export const Default: StoryFn<LabelProps> = (args) => <Label {...args} />
