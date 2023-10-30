import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Heading from '.'

describe('<Heading/>', () => {
  it('should render the heading', () => {
    render(
      <Heading>
        <span>This is the heading</span>
      </Heading>
    )

    expect(screen.getByText('This is the heading')).toBeInTheDocument()
  })
})
