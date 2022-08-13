import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    title: 'Rio de Janeiro'
  },
  argTypes: {
    type: {
      control: false
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => <Radio {...args} />
