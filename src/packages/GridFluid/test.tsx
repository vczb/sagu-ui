import React from 'react'
import { render } from '../../utils/testUtils'

import GridFluid from '.'

describe('<GridFluid />', () => {
  it('should render GridFluid correctly with children', () => {
    const { container } = render(
      <GridFluid>
        <div>GridFluid</div>
      </GridFluid>
    )
    expect(container).toMatchSnapshot()
  })
})
