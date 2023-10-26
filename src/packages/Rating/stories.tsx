import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Rating, { RatingProps } from '.'

export default {
  title: 'Rating',
  component: Rating,
  args: {
    name: 'Rating',
    value: 1,
    onChange: (newValue: number) => console.log(newValue)
  }
} as Meta

export const Default: StoryFn<RatingProps> = (args) => <Rating {...args} />
