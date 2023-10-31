import React from 'react'
import { render } from '../../utils/testUtils'

import Avatar from '.'

describe('<Avatar />', () => {
  it('Should render Avatar with given children', () => {
    const { container } = render(<Avatar>John</Avatar>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Avatar with the given image', () => {
    const { container } = render(
      <Avatar src="https://picsum.photos/id/237/300/300" alt="John Doe">
        John
      </Avatar>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Avatar with the different sizes', () => {
    const { container } = render(
      <>
        <Avatar size="xsmall">XS</Avatar>
        <Avatar size="small">S</Avatar>
        <Avatar size="medium">M</Avatar>
        <Avatar size="large">L</Avatar>
      </>
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Avatar with the different shape variants', () => {
    const { container } = render(
      <>
        <Avatar variant="circle">Circle</Avatar>
        <Avatar variant="square">Square</Avatar>
        <Avatar variant="rounded">Rounded</Avatar>
      </>
    )
    expect(container).toMatchSnapshot()
  })
  it('should render Avatar by handling custom props correctly', () => {
    const { getByTestId } = render(
      <Avatar data-testid="custom-avatar" title="Custom Title">
        John
      </Avatar>
    )
    const avatar = getByTestId('custom-avatar')
    expect(avatar).toHaveAttribute('title', 'Custom Title')
  })
})
