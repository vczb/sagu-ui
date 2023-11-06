import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import FileField, { FileFieldProps } from '.'

export default {
  title: 'FileField',
  component: FileField,
  args: {},
  argTypes: {
    type: {}
  }
} as Meta

export const Default: StoryFn<FileFieldProps> = (args) => {
  return <FileField {...args} onChange={(val) => console.log(val)} />
}
