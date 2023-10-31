import React from 'react'
import { render } from '../../utils/testUtils'

import Box from '.'

describe('<Box />', () => {
  it('should render Box with default props', () => {
    const { container } = render(<Box>Default</Box>)
    expect(container).toMatchSnapshot()
  })
  it('should render Box with different variants', () => {
    const { container } = render(
      <>
        <Box variant="default">Default</Box>
        <Box variant="filled">Filled</Box>
        <Box variant="transparent">Transparent</Box>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Box with different flex props', () => {
    const { container } = render(
      <>
        <Box flex="column">Column</Box>
        <Box flex="row">Row</Box>
        <Box flex="block">Block</Box>
        <Box flex="none">None</Box>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Box with different justify props', () => {
    const { container } = render(
      <>
        <Box justify="space-evenly">Space Evenly</Box>
        <Box justify="space-between">Space Between</Box>
        <Box justify="space-around">Space Around</Box>
        <Box justify="center">Center</Box>
        <Box justify="end">End</Box>
        <Box justify="start">Start</Box>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Box with different alignment props', () => {
    const { container } = render(
      <>
        <Box alignment="normal">Normal</Box>
        <Box alignment="baseline">Baseline</Box>
        <Box alignment="center">Center</Box>
        <Box alignment="end">End</Box>
        <Box alignment="start">Start</Box>
      </>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render Box with fullWidth as false ', () => {
    const { container } = render(
      <>
        <Box fullWidth={false}>Full Width</Box>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Box with nested components', () => {
    const { container } = render(
      <Box>
        <Box>Nested Box 1</Box>
        <Box>Nested Box 2</Box>
      </Box>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Box by handling custom props correctly', () => {
    const { getByTestId } = render(
      <Box data-testid="custom-box" title="Custom Title">
        Custom
      </Box>
    )
    const box = getByTestId('custom-box')
    expect(box).toHaveAttribute('title', 'Custom Title')
  })
})
