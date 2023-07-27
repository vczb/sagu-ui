import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
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

export const Default: StoryFn<AvatarProps> = (args) => <Avatar {...args} />
