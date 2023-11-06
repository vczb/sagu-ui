import React from 'react'
import { render } from '../../utils/testUtils'

import Badge from '.'

describe('<Badge />', () => {
  it('should render Badge with default props', () => {
    const { container } = render(<Badge content="5" />)
    expect(container).toMatchSnapshot()
  })

  it('should render Badge with custom size, shape, and color', () => {
    const { container } = render(
      <Badge content="New" size="large" shape="circle" color="red" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render a medium small circle badge', () => {
    const { container } = render(
      <Badge content="New" size="small" shape="circle" color="red" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render Badge by handling custom props correctly', () => {
    const { getByTestId } = render(
      <Badge data-testid="custom-badge" title="Custom Title" content="Custom" />
    )
    const badge = getByTestId('custom-badge')
    expect(badge).toHaveAttribute('title', 'Custom Title')
  })
})
