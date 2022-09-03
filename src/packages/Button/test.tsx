import React from 'react'
import { render, screen } from '../../utils/testUtils'
import { theme } from '../../styles'

import Button from '.'

describe('<Button />', () => {
  it('Should render a button primary as default', () => {
    render(<Button outline={true}>Sign Up</Button>)

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      color: theme.colors.primary.medium,
      borderColor: theme.colors.primary.medium,
      backgroundColor: 'transparent'
    })

    expect(button).toHaveStyleRule('color', theme.colors.secondary.medium, {
      modifier: ':hover'
    })
    expect(button).toHaveStyleRule(
      'border-color',
      theme.colors.secondary.medium,
      {
        modifier: ':hover'
      }
    )

    expect(button).toHaveStyleRule('color', theme.colors.secondary.dark, {
      modifier: ':active'
    })
    expect(button).toHaveStyleRule(
      'border-color',
      theme.colors.secondary.dark,
      {
        modifier: ':active'
      }
    )
  })

  it('Should render a secondary button when variant is passed', () => {
    render(
      <Button outline={true} variant="secondary">
        Sign Up
      </Button>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyle({
      color: theme.colors.secondary.medium,
      borderColor: theme.colors.secondary.medium,
      backgroundColor: 'transparent'
    })

    expect(button).toHaveStyleRule('color', theme.colors.primary.light, {
      modifier: ':hover'
    })
    expect(button).toHaveStyleRule('border-color', theme.colors.primary.light, {
      modifier: ':hover'
    })

    expect(button).toHaveStyleRule('color', theme.colors.primary.medium, {
      modifier: ':active'
    })
    expect(button).toHaveStyleRule(
      'border-color',
      theme.colors.primary.medium,
      {
        modifier: ':active'
      }
    )
  })
})
