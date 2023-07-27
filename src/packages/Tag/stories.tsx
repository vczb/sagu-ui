import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Tag, { TagProps } from '.'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    value: 'coffee'
  }
} as Meta

export const Default: StoryFn<TagProps> = (args) => <Tag {...args} />
