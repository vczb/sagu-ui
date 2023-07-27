import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'
import { mock } from './mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    title: 'More',
    active: false,
    items: mock
  }
} as Meta

export const Default: StoryFn<MenuProps> = (args) => <Menu {...args} />

export const IconMenu: StoryFn<MenuProps> = (args) => <Menu {...args} asIcon />
