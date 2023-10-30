import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Tag from '.'

describe('<Tag/>', () => {
  it('should render the tag value given', () => {
    render(<Tag value="coffee" />)

    expect(screen.getByText('coffee')).toBeInTheDocument()
  })

  it('should render tag with uppercase content', async () => {
    const dom = render(<Tag value="coffee" isUppercase={true} />)

    expect(dom.getByText(/COFFEE/i)).toBeInTheDocument()
  })
})
