import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Box from '.'

export default {
  title: 'Box',
  component: Box
} as Meta

export const Default: StoryFn = (args) => (
  <Box {...args}>
    <>hello</>
  </Box>
)

export const MultipleChildren: StoryFn = (args) => (
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
