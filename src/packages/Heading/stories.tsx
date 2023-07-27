import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Populars'
}
