import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Slider, { SliderProps } from '.'
import { mock } from './mock'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    images: mock
  }
} as Meta

export const Default: StoryFn<SliderProps> = (args) => <Slider {...args} />

export const OneImageOnly: StoryFn<SliderProps> = (args) => (
  <Slider {...args} images={[mock[0]]} />
)
