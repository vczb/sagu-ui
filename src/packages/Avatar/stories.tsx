import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    children: 'OP',
    src: 'https://picsum.photos/id/237/300/300',
    alt: 'Random image',
    size: 'medium',
    variant: 'circle'
  }
} as Meta

export const Default: Story<AvatarProps> = (args) => <Avatar {...args} />
