/* eslint-disable react/no-children-prop */
import React from 'react'
import { fireEvent, render, screen } from '../../utils/testUtils'

import ToolTip from '.'

describe('<ToolTip/>', () => {
  const tooltipArgs = {
    children: 'Hover me',
    content: 'Tooltip text here'
  }
  it('should render the tooltip text', () => {
    render(<ToolTip {...tooltipArgs} />)

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('should render the tooltip content when hovered over the text', async () => {
    render(<ToolTip {...tooltipArgs} />)
    const tooltipText = screen.getByText('Hover me')

    fireEvent.mouseOver(tooltipText)

    await screen.findByText('Tooltip text here')
  })
})
