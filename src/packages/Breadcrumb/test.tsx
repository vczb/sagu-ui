import React from 'react'
import { render, screen } from '../../utils/testUtils'
import Breadcrumb from '.'

const mock = [
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Tech',
    link: '/blog/tech'
  },
  {
    name: 'React',
    link: '/blog/tech/react'
  }
]

describe('<Breadcrumb>', () => {
  it('Should render the breadcrumb', () => {
    const { container } = render(<Breadcrumb items={mock} />)
    expect(container).toBeInTheDocument()
    expect(container.querySelectorAll('li').length).toBe(5)
  })

  it('should render with a custom separator', () => {
    const customSeparator = '+'
    render(<Breadcrumb items={mock} separator={customSeparator} />)

    expect(screen.getAllByText(customSeparator)).toHaveLength(2)
  })
})
