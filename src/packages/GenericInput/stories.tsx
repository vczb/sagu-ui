import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import GenericInput, { GenericInputProps } from '.'

const selectMock = {
  generic: {
    as: 'select',
    props: {
      children: [
        <option key="1">Option 1</option>,
        <option key="2">Option 2</option>
      ]
    }
  }
}

export default {
  title: 'GenericInput',
  component: GenericInput,
  args: {}
} as Meta

export const Default: StoryFn<GenericInputProps> = (args) => (
  <GenericInput {...args} />
)
export const asSelect: StoryFn<GenericInputProps> = (args) => (
  <GenericInput {...args} {...selectMock} />
)
