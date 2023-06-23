import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import GridMain, { GridMainProps } from '.'

export default {
  title: 'GridMain',
  component: GridMain
} as Meta

export const Default: Story<GridMainProps> = (args) => (
  <GridMain {...args} size="mini">
    <h1>CHILDREN</h1>
  </GridMain>
)
