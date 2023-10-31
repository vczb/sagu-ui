import React from 'react'
import { render } from '../../utils/testUtils'

import GridMain from '.'

describe('<GridMain />', () => {
  it('should render GridMain correctly with default props', () => {
    const { container } = render(
      <GridMain>
        <div>GridMain</div>
      </GridMain>
    )

    expect(container).toMatchSnapshot()
  })
  it('should render GridMain with different minHeight', () => {
    const { container } = render(
      <>
        <GridMain minHeight="unset">
          <div>GridMain</div>
        </GridMain>
        <GridMain minHeight="70vh">
          <div>GridMain</div>
        </GridMain>
        <GridMain minHeight="100vh">
          <div>GridMain</div>
        </GridMain>
        <GridMain minHeight="100%">
          <div>GridMain</div>
        </GridMain>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render GridMain by handling the custom props correctly', () => {
    const { getByTestId } = render(
      <GridMain data-testid="custom-grid-main" title="Custom Title">
        Custom
      </GridMain>
    )
    const box = getByTestId('custom-grid-main')
    expect(box).toHaveAttribute('title', 'Custom Title')
  })
})
