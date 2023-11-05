import React from 'react'
import { render, fireEvent } from '../../utils/testUtils'
import Range from '.'

describe('<Range />', () => {
  it('Should render simple range', () => {
    const { container } = render(
      <Range
        onChange={(value) => {
          console.log(value)
        }}
        min={0}
        max={100}
        value={50}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('Should render multiple range', () => {
    const { container } = render(
      <Range
        onChange={(value) => {
          console.log(value)
        }}
        min={0}
        max={100}
        value={[25, 75]}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('Should call on change function passed to the range component for multiple range selection', () => {
    const onChangeMock = jest.fn()
    const { container } = render(
      <Range onChange={onChangeMock} min={0} max={100} value={[25, 75]} />
    )
    const firstRangeSelection = container.querySelectorAll(
      'input[type="range"]'
    )[0]
    const secondRangeSelection = container.querySelectorAll(
      'input[type="range"]'
    )[1]

    fireEvent.change(firstRangeSelection, { target: { value: 30 } })
    fireEvent.change(secondRangeSelection, { target: { value: 60 } })

    expect(onChangeMock).toHaveBeenCalledWith([30, 60])
  })

  it('Should call on change function passed to the range component for simple range selection', () => {
    const onChangeMock = jest.fn()
    const { container } = render(
      <Range onChange={onChangeMock} min={0} max={100} value={50} />
    )
    const rangeSelection = container.querySelectorAll('input[type="range"]')[0]
    fireEvent.change(rangeSelection, { target: { value: 60 } })

    expect(onChangeMock).toHaveBeenCalledWith(60)
  })
})
