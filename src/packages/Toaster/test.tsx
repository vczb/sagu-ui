import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Toaster from '.'

describe('<Toaster />', () => {
  it('Should render toaster close button', () => {
    render(<Toaster> Toast message </Toaster>)
    const button = screen.getByRole('button')

    expect(button.textContent).toBe('X')
  })

  it('Should make the toaster disappear when clicking the close button', async () => {
    render(<Toaster> Toast message </Toaster>)
    const button = screen.getByRole('button')

    button.click()

    expect(screen.queryByText('Toast Message')).not.toBeInTheDocument()
  })
})
