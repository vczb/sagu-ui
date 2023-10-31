import React from 'react'
import { render } from '../../utils/testUtils'

import Divider from '.'

describe('<Divider />', () => {
  it('should render Divider correctly', () => {
    const { container } = render(<Divider />)
    expect(container).toMatchSnapshot()
  })
})
