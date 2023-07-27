import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Alert, { AlertProps } from '.'

export default {
  title: 'Alert',
  component: Alert,
  args: {
    children: 'This is an info alert',
    severity: 'info',
    header: '',
    showIcon: true,
    closable: false
  }
} as Meta

export const Default: StoryFn<AlertProps> = (args) => <Alert {...args} />
