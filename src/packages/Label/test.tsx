import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Label from '.'

describe('<Label />', () => {
  it('Should render label with correct title', () => {
    render(<Label title="Coupon" />)

    const label = screen.getByText('Coupon')
    expect(label).toBeInTheDocument()
  })
})
