import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'

export default {
  title: 'TextContent',
  component: TextContent,
  args: {
    value: 'My text content'
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
