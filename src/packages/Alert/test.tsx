import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Alert from '.'

describe('<Alert />', () => {
  it('should render alert with the given header', () => {
    const headerText = 'Header'
    render(
      <Alert header={headerText}>
        <div>This is an alert</div>
      </Alert>
    )

    expect(screen.getByText(headerText)).toBeInTheDocument()
  })

  it('should render alert with the given children', () => {
    const childText = 'This is an alert'
    render(
      <Alert>
        <div>{childText}</div>
      </Alert>
    )

    expect(screen.getByText(childText)).toBeInTheDocument()
  })

  it('should call onClose function when close is clicked', () => {
    const onCloseMockFn = jest.fn()
    render(
      <Alert closable onClose={onCloseMockFn}>
        <div>This is an alert</div>
      </Alert>
    )

    const closeIcon = screen.getByText('X')
    closeIcon!.click()

    expect(onCloseMockFn).toBeCalled()
  })

  it('should match snapshot for error scenario', () => {
    const { container } = render(
      <Alert severity="error" closable>
        <div>This is an alert</div>
      </Alert>
    )

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot for success scenario', () => {
    const { container } = render(
      <Alert severity="success" closable>
        <div>This is an alert</div>
      </Alert>
    )

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot for warning scenario', () => {
    const { container } = render(
      <Alert severity="warning" closable>
        <div>This is an alert</div>
      </Alert>
    )

    expect(container).toMatchSnapshot()
  })
})
