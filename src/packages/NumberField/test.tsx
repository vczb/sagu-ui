import { render } from '../../utils/testUtils'
import React from 'react'
import NumberField from './'

describe('<NumberField />', () => {
  it('should render correctly', () => {
    const { container } = render(<NumberField />)
    expect(container.firstChild).toBeDefined()
  })

  it('should render with the correct default value', () => {
    const { container } = render(<NumberField />)
    const input = container.querySelector('input')
    expect(input).toHaveValue(0)
  })

  it('should render with the correct value', () => {
    const { container } = render(<NumberField initialValue={42} />)
    const input = container.querySelector('input')
    expect(input).toHaveValue(42)
  })

  it('should consider min', () => {
    const { container } = render(<NumberField initialValue={42} min={50} />)
    const input = container.querySelector('input')
    expect(input).toHaveValue(50)
  })

  it('should consider max', () => {
    const { container } = render(<NumberField initialValue={42} max={10} />)
    const input = container.querySelector('input')
    expect(input).toHaveValue(10)
  })

  describe('Buttons', () => {
    it('should increase the value when clicking on the increment button', () => {
      const { container } = render(<NumberField initialValue={42} />)
      const incrementButton = container.querySelector<HTMLButtonElement>(
        '[aria-label="increment"]'
      )
      const input = container.querySelector('input')
      incrementButton!.click()
      expect(input).toHaveValue(43)
    })

    it('should decrease the value when clicking on the decrement button', () => {
      const { container } = render(<NumberField initialValue={42} />)
      const decrementButton = container.querySelector<HTMLButtonElement>(
        '[aria-label="decrement"]'
      )
      const input = container.querySelector('input')
      decrementButton!.click()
      expect(input).toHaveValue(41)
    })

    it('should not increase the value when clicking on the increment button and the value is equal to max', () => {
      const { container } = render(<NumberField initialValue={42} max={42} />)
      const incrementButton = container.querySelector<HTMLButtonElement>(
        '[aria-label="increment"]'
      )
      const input = container.querySelector('input')
      incrementButton!.click()
      expect(input).toHaveValue(42)
    })

    it('should not decrease the value when clicking on the decrement button and the value is equal to min', () => {
      const { container } = render(<NumberField initialValue={42} min={42} />)
      const decrementButton = container.querySelector<HTMLButtonElement>(
        '[aria-label="decrement"]'
      )
      const input = container.querySelector('input')
      decrementButton!.click()
      expect(input).toHaveValue(42)
    })
  })
})
