import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
} as Meta

export const Default: Story = () => (
  <Accordion title={'Accordion'}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Accordion>
)
