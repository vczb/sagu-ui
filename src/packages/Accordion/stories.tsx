import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
} as Meta

export const Default: StoryFn = () => (
  <Accordion title={'Accordion'}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Accordion>
)
