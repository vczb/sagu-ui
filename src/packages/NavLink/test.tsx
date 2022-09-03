import React from 'react'
import { render, screen } from '../../utils/testUtils'
import { theme } from '../../styles'

import NavLink from '.'

describe('<NavLink />', () => {
  it('Should render a default NavLink', () => {
    render(<NavLink size="medium">Company Retreats</NavLink>)
    const link = screen.getByText(/Company Retreats/i)
    expect(link).toHaveStyleRule('color', theme.colors.primary.medium)
  })
  it('Should render a NavLink actived', () => {
    render(
      <NavLink size="medium" active>
        Company Retreats
      </NavLink>
    )
    const link = screen.getByText(/Company Retreats/i)
    expect(link).toHaveStyleRule('color', theme.colors.secondary.medium)
  })
})
