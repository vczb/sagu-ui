import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Radio from '.'

describe('<Radio />', () => {
  it('Should render with correct title', () => {
    render(<Radio title="Chicago" />)

    const title = screen.getByText('Chicago')
    expect(title).toBeInTheDocument()
  })
  it('Should be checked when clicked', () => {
    const { container } = render(<Radio title="Chicago" />)
    const input = container.querySelector('input')
    input!.click()
    expect(input).toBeChecked()
  })
})
