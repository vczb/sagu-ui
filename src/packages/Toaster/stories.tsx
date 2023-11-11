import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Toaster, { ToasterProps } from './index'

export default {
  title: 'Toaster',
  component: Toaster,
  args: {
    children: 'This is a toaster message',
    severity: 'info',
    showIcon: true,
    closable: true,
    onClose: () => console.log('closed')
  }
} as Meta

export const Default: StoryFn<ToasterProps> = (args) => <Toaster {...args} />
