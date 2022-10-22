import React from 'react'
import { render } from '../../utils/testUtils'
import Breadcrumb from '.'

describe('<Breadcrumb>', () => {
  it('Should render the breadcrumb', () => {
    const { container } = render(
      <Breadcrumb>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </Breadcrumb>
    )
    expect(container).toBeInTheDocument()
    expect(container.querySelectorAll('li').length).toBe(5)
  })
})
