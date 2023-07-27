import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import NavLink, { NavLinkProps } from '.'

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    children: 'Company Retreats',
    active: false,
    size: 'medium'
  }
} as Meta

export const Default: StoryFn<NavLinkProps> = (args) => <NavLink {...args} />
