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

export const MultipleChildren: Story = (args) => (
  <Box
    border={true}
    shadow={true}
    padding="medium"
    flex="column"
    gap="small"
    fullWidth
    {...args}
  >
    <div>hello</div>
    <div>World</div>
    <div>Welcome</div>
    <div>to</div>
    <div>Sagu-ui</div>
  </Box>
)
