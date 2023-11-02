import React from 'react'
import { render, screen } from '../../utils/testUtils'

import TextContent from '.'

describe('<TextContent />', () => {
  it('Should render text content', () => {
    render(<TextContent value="This is a statement" />)
    const text = screen.getByText('This is a statement')

    expect(text).toBeInTheDocument()
  })

  it('Should render text content in different variants of tag', () => {
    const { container } = render(
      <>
        <TextContent value="This is a statement" tag="p" />
        <TextContent value="This is a statement" tag="span" />
        <TextContent value="This is a statement" tag="i" />
        <TextContent value="This is a statement" tag="b" />
        <TextContent value="This is a statement" tag="mark" />
      </>
    )

    expect(container).toMatchSnapshot()
  })

  it('Should render text content in different variants of size', () => {
    const { container } = render(
      <>
        <TextContent value="This is a statement" color="white" />
        <TextContent value="This is a statement" color="black" />
        <TextContent value="This is a statement" color="primary" />
        <TextContent value="This is a statement" color="secondary" />
      </>
    )

    expect(container).toMatchSnapshot()
  })

  it('Should render text content in different variants of color', () => {
    const { container } = render(
      <>
        <TextContent value="This is a statement" size="small" />
        <TextContent value="This is a statement" size="medium" />
        <TextContent value="This is a statement" size="large" />
      </>
    )

    expect(container).toMatchSnapshot()
  })
})
