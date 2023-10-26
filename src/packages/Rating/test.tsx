import Rating from './index'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { render } from '../../utils/testUtils'

describe('Rating', () => {
  const onChangeMock = jest.fn()
  it('should render rating component', function () {
    const { container } = render(
      <Rating onChange={onChangeMock} name="rating" value={1} />
    )
    expect(container).toBeInTheDocument()
  })

  it('should invoke onChange function when a star is clicked', function () {
    const { container } = render(
      <Rating onChange={onChangeMock} name="rating" value={1} />
    )
    const twoStarButton = container.querySelector('#star2')

    twoStarButton && fireEvent.click(twoStarButton)

    expect(onChangeMock).toHaveBeenCalled()
    expect(onChangeMock).toHaveBeenCalledWith(2)
  })
})
