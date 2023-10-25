import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Tooltip, { TooltipProps } from '.'

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    children: 'Hover me',
    content: 'Tooltip text here'
  },
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right']
      }
    }
  }
} as Meta

export const Default: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />

// Separated stories for each position
export const Top: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} position="top">
    Top
  </Tooltip>
)

export const Bottom: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} position="bottom">
    Bottom
  </Tooltip>
)

export const Left: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} position="left">
    Left
  </Tooltip>
)

export const Right: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} position="right">
    Right
  </Tooltip>
)
