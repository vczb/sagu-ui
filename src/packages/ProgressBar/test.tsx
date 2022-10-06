import React from 'react'
import ProgressBar from '.'
import { render, screen } from '../../utils/testUtils'

describe('<ProgressBar />', () => {
  it('Should render the ProgressBar', () => {
    render(<ProgressBar />)
    const progressBarElt = screen.getByTestId('progress-bar')
    expect(progressBarElt).toBeInTheDocument()
  })

  it('Should render the ProgressBar with label and value', () => {
    render(<ProgressBar label="Title" value={45} showValue />)
    const progressBarElt = screen.getByTestId('progress-bar')
    expect(progressBarElt).toBeInTheDocument()

    const label = screen.getByText('Title')
    expect(label).toBeInTheDocument()

    const value = screen.getByText('45%')
    expect(value).toBeInTheDocument()
  })

  it('Should the ProgressBar without value when indeterminate', () => {
    render(<ProgressBar indeterminate value={45} showValue />)
    const progressBarElt = screen.getByTestId('progress-bar')
    expect(progressBarElt).toBeInTheDocument()

    const value = screen.queryByTestId('progress-bar-value')
    expect(value).not.toBeVisible()
  })
})
