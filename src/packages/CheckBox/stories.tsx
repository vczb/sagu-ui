import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'CheckBox',
  component: CheckBox,
  args: {
    title: 'New York'
  },
  argTypes: {
    type: {
      control: false
    }
  }
} as Meta

export const Default: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args} />
