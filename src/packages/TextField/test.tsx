import React from 'react'
import { render, screen } from '../../utils/testUtils'

import TextField from '.'

describe('<TextField />', () => {
  it('Should render with correct label and value', () => {
    render(<TextField label="Coupon" defaultValue={'AVANTHOME20'} />)
    const label = screen.getByText('Coupon')
    const input = screen.getByRole('textbox')
    expect(label).toBeInTheDocument()
    expect(input).toHaveValue('AVANTHOME20')
  })
  it('Should render with correct placeholder', () => {
    render(<TextField label="Coupon" placeholder="Got a code?" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'Got a code?')
  })
})
