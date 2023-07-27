import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  args: {
    value: 'My text content'
  }
} as Meta

export const Default: StoryFn<TextContentProps> = (args) => (
  <TextContent {...args} />
)
