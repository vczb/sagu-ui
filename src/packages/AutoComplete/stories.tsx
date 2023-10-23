import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import AutoComplete, { AutoCompleteProps } from '.'
import { mock } from './mock'

export default {
  title: 'AutoComplete',
  component: AutoComplete,
  args: {
    label: 'where',
    fieldPlaceholder: 'Enter the Input',
    freeSolo: false,
    options: mock
  },
  argTypes: {
    fieldValue: {
      control: false
    }
  }
} as Meta

export const ComboBox: StoryFn<AutoCompleteProps> = (args) => {
  return <AutoComplete {...args} freeSolo={false} />
}

export const FreeSolo: StoryFn<AutoCompleteProps> = (args) => {
  return <AutoComplete {...args} freeSolo />
}
