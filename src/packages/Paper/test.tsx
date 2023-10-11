import React from 'react'
import { render, screen } from '../../utils/testUtils'
import { theme } from '../../styles'

import Paper from '.'

describe('<Paper />', () => {
  it('Should render when active is true', () => {
    render(
      <Paper active={true} placement="right">
        <p>Hello world!</p>
      </Paper>
    )
    const paper = screen.getByTestId('paper')
    expect(paper).toHaveStyleRule('display', 'block')
  })
  it('Should not render when active is false', () => {
    render(
      <Paper active={false} placement="right">
        <p>Hello world!</p>
      </Paper>
    )
    const paper = screen.getByTestId('paper')
    expect(paper).toHaveStyleRule('display', 'none')
  })
  it('Should render with children correctly', () => {
    render(
      <Paper placement="bottom">
        <span>Hello World!</span>
      </Paper>
    )
    const span = screen.getByText(/Hello World!/)
    expect(span).toBeInTheDocument()
  })
  it('Should render in bottom placement', () => {
    render(
      <Paper placement="bottom">
        <></>
      </Paper>
    )
    const paper = screen.getByTestId('paper')
    expect(paper).toHaveStyleRule(
      'top',
      `calc(100% + ${theme.spacings.xxsmall})`
    )
  })
  it('Should render in left placement', () => {
    render(
      <Paper placement="left">
        <></>
      </Paper>
    )
    const paper = screen.getByTestId('paper')
    expect(paper).toHaveStyleRule(
      'right',
      `calc(100% + ${theme.spacings.xxsmall})`
    )
  })
  it('Should render in right placement', () => {
    render(
      <Paper placement="right">
        <></>
      </Paper>
    )
    const paper = screen.getByTestId('paper')
    expect(paper).toHaveStyleRule(
      'left',
      `calc(100% + ${theme.spacings.xxsmall})`
    )
  })
})
