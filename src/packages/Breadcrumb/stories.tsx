import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {
    items: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Tech',
        link: '/blog/tech'
      },
      {
        name: 'React',
        link: '/blog/tech/react'
      }
    ]
  }
} as Meta

export const Default: StoryFn<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)
