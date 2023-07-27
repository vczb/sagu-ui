import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import NumberField, { NumberFieldProps } from '.'

export default {
  title: 'NumberField',
  component: NumberField,
  args: {}
} as Meta

export const Default: StoryFn<NumberFieldProps> = (args) => (
  <NumberField {...args} />
)
