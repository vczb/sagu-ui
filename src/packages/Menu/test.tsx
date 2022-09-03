import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Menu from '.'
import { mock } from './mock'

describe('<Menu />', () => {
  it('Should render Menu when exists items', () => {
    render(<Menu title="More" items={mock} />)

    expect(screen.getByText('More')).toBeInTheDocument()
  })
  it('Should not render Menu when items is empty', () => {
    render(<Menu title="More" items={[]} />)

    expect(screen.queryByText('More')).not.toBeInTheDocument()
  })
})
