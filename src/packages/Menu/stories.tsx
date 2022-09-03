import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
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

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

export const IconMenu: Story<MenuProps> = (args) => <Menu {...args} asIcon />
