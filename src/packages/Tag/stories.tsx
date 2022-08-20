import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Tag, { TagProps } from '.'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    value: 'coffee'
  }
} as Meta

export const Default: Story<TagProps> = (args) => <Tag {...args} />
