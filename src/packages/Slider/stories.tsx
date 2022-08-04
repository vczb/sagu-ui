import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Slider, { SliderProps } from '.'
import { mock } from './mock'

export default {
  title: 'Slider',
  component: Slider,
  args: {
    images: mock
  }
} as Meta

export const Default: Story<SliderProps> = (args) => <Slider {...args} />

export const OneImageOnly: Story<SliderProps> = (args) => (
  <Slider {...args} images={[mock[0]]} />
)
