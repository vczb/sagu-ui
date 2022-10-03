import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Accordion from '.'

describe('<Accordion />', () => {
  it('Should render title with correct text', () => {
    render(<Accordion title="Accordion">Hello world</Accordion>)

    const title = screen.getByText('Accordion')
    expect(title).toBeInTheDocument()
  })
  it('Should render children when content is passed in', () => {
    render(<Accordion title="Accordion">Hello world</Accordion>)

    const content = screen.getByText('Hello world')
    expect(content).toBeInTheDocument()
  })
})
