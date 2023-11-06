import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import DateField, { DateFieldProps } from '.'

export default {
  title: 'DateField',
  component: DateField,
  args: {},
  argTypes: {
    type: {}
  }
} as Meta

export const Default: StoryFn<DateFieldProps> = (args) => {
  return <DateField {...args} onChange={(val) => console.log(val)} />
}
