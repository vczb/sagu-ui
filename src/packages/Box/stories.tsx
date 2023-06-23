import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Box from '.'

export default {
  title: 'Box',
  component: Box
} as Meta

export const Default: Story = (args) => (
  <Box {...args}>
    <>hello</>
  </Box>
)
