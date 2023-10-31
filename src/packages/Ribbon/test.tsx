import React from 'react'
import { render } from '../../utils/testUtils'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render Ribbon correctly with default props', () => {
    const { container } = render(
      <Ribbon>
        <div>Ribbon</div>
      </Ribbon>
    )

    expect(container).toMatchSnapshot()
  })

  it('should render Ribbon with given size and color', () => {
    const { container } = render(
      <>
        <Ribbon size="small" color="secondary">
          <div>Ribbon</div>
        </Ribbon>
        <Ribbon size="normal" color="primary">
          <div>Ribbon</div>
        </Ribbon>
      </>
    )

    expect(container).toMatchSnapshot()
  })
})
