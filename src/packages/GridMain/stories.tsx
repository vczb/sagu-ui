import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import GridMain, { GridMainProps } from '.'

export default {
  title: 'GridMain',
  component: GridMain
} as Meta

export const Default: StoryFn<GridMainProps> = (args) => (
  <GridMain {...args} size="mini">
    <h1>CHILDREN</h1>
  </GridMain>
)
