import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import NumberField, { NumberFieldProps } from '.'

export default {
  title: 'NumberField',
  component: NumberField,
  args: {}
} as Meta

export const Default: Story<NumberFieldProps> = (args) => (
  <NumberField {...args} />
)
