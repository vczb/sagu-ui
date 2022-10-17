import React from 'react'
import { render } from '../../utils/testUtils'
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
})
