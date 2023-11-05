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

  it('should render the small heading with lineLeft and lineBottom', () => {
    const { container } = render(
      <Heading size={'small'} lineLeft lineBottom>
        <span>This is the heading</span>
      </Heading>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render the huge heading with lineLeft and lineBottom', () => {
    const { container } = render(
      <Heading size={'huge'} lineLeft lineBottom>
        <span>This is the heading</span>
      </Heading>
    )

    expect(container).toMatchSnapshot()
  })
})
