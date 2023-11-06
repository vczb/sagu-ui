import { mock } from './mock'

import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    options: mock
  }
} as Meta

export const Default: StoryFn<SelectProps> = (args) => (
  <Select {...args} onChange={(e) => console.log(e.target.value)} />
)
