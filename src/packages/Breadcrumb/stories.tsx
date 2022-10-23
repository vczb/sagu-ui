import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
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

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)
