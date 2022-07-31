import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Label, { LabelProps } from '.'

export default {
  title: 'Label',
  component: Label,
  args: {
    title: 'Email'
  }
} as Meta

export const Default: Story<LabelProps> = (args) => <Label {...args} />
