import React from 'react'
import { render, screen, waitFor } from '../../utils/testUtils'

import Toaster from '.'

describe('<Toaster />', () => {
  it('Should render toaster close button', () => {
    render(<Toaster> Toast message </Toaster>)
    const button = screen.getByRole('button')

    expect(button.textContent).toBe('X')
  })

  it('Should make the toaster disappear when clicking the close button', async () => {
    render(<Toaster> Toast message </Toaster>)

    const closeButton = screen.getByRole('button')
    closeButton.click()

    expect(screen.queryByText('Toast message')).not.toBeInTheDocument()
  })

  it('Should ensure that toast message should disappear after specified duration', async () => {
    jest.useFakeTimers()

    render(<Toaster duration={3000}>Toast message</Toaster>)
    expect(screen.queryByText('Toast message')).toBeInTheDocument()

    jest.advanceTimersByTime(3000)

    await waitFor(() => {
      expect(screen.queryByText('Toast message')).toBeNull()
    })
  })
})
