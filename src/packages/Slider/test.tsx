import React from 'react'
import { render, screen, fireEvent } from '../../utils/testUtils'
import Slider from './'
import { mock } from './mock'

describe('<Slider />', () => {
  it('should render correctly', () => {
    const { container } = render(<Slider images={mock} />)

    expect(container.firstChild).toBeDefined()
  })

  it('should display all images', () => {
    const { container } = render(<Slider images={mock} />)

    // +2 because of the buttons
    expect(container.firstChild?.childNodes.length).toBe(mock.length + 2)
  })

  describe('Buttons', () => {
    it('should not appear if there are no images', () => {
      const { container } = render(<Slider images={[]} />)

      expect(container.firstChild?.childNodes.length).toBe(0)
    })

    it('should not appear if there is only one image', () => {
      const { container } = render(<Slider images={[mock[0]]} />)

      expect(container.firstChild?.childNodes.length).toBe(1)
    })
    it('should be at the correct stage at the beginning', () => {
      const { container } = render(<Slider images={mock} />)

      const [prevButton, nextButton] = Array.from(
        container.querySelectorAll('button')
      )

      expect(prevButton).toHaveAttribute('disabled')
      expect(nextButton).not.toHaveAttribute('disabled')
    })

    it('should be at the correct stage if another image is selected', () => {
      const { container } = render(<Slider images={mock} />)

      const [prevButton, nextButton] = Array.from(
        container.querySelectorAll('button')
      )

      nextButton.click()

      expect(prevButton).not.toHaveAttribute('disabled')
      expect(nextButton).not.toHaveAttribute('disabled')
    })

    it('should be at the correct stage if the last image is selected', () => {
      const { container } = render(<Slider images={mock.slice(0, 3)} />)

      const [prevButton, nextButton] = Array.from(
        container.querySelectorAll('button')
      )

      nextButton.click()
      nextButton.click()

      expect(prevButton).not.toHaveAttribute('disabled')
      expect(nextButton).toHaveAttribute('disabled')
    })

    it('should be able to change the images by clicking on the dots', () => {
      render(<Slider images={mock} dots />)
      const [prevButton, nextButton] = screen.getAllByRole('button')
      expect(prevButton).toHaveAttribute('disabled')
      expect(nextButton).not.toHaveAttribute('disabled')

      const dots = screen.getAllByTestId('dot')
      const dotForLastImage = dots[9]
      fireEvent.click(dotForLastImage)

      expect(prevButton).not.toHaveAttribute('disabled')
      expect(nextButton).toHaveAttribute('disabled')

      fireEvent.click(prevButton)

      expect(prevButton).not.toHaveAttribute('disabled')
      expect(nextButton).not.toHaveAttribute('disabled')
    })

    it('should render loading placeholder if loading is set to true', () => {
      const { container } = render(<Slider images={mock} loading />)

      expect(screen.queryAllByRole('img')).toHaveLength(0)
      expect(container).toMatchSnapshot()
    })
  })
})
