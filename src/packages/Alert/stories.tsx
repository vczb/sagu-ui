import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
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

export const Default: Story<AlertProps> = (args) => <Alert {...args} />
