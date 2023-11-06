import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'TextArea',
  component: TextArea,
  args: {
    label: 'Description',
    placeholder: '...'
  }
} as Meta

export const Default: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />
