import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('Should render with correct title', () => {
    render(<Checkbox title="New York" />)

    const title = screen.getByText('New York')
    expect(title).toBeInTheDocument()
  })
  it('Should be checked when clicked', () => {
    const { container } = render(<Checkbox title="New York" />)
    const input = container.querySelector('input')
    input!.click()
    expect(input).toBeChecked()
  })
})
