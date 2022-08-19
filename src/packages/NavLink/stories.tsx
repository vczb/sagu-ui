import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
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

export const Default: Story<NavLinkProps> = (args) => <NavLink {...args} />
