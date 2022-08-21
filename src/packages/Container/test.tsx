import React from 'react'
import { render } from '../../utils/testUtils'
import { theme } from '../../styles'
import Container from './'

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <span>Hello World</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.container.medium
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Hello World
        </span>
      </div>
    `)
  })
})
