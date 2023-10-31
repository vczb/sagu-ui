import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import Highlight from '.'

describe('Highlight Component', () => {
  const title = 'Sample Title'
  const subtitle = 'Sample subtitle'

  it('should render the Highlight component with default helper text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Highlight title={title} subtitle={subtitle} />
      </ThemeProvider>
    )

    expect(getByText('your stay in one of')).toBeInTheDocument()

    expect(getByText(title.toString())).toBeInTheDocument()
    expect(getByText(subtitle)).toBeInTheDocument()
  })

  it('should render the Highlight component with custom helper text', () => {
    const customHelperText = 'Custom helper text'
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Highlight
          helperText={customHelperText}
          title={title}
          subtitle={subtitle}
        />
      </ThemeProvider>
    )

    expect(getByText(customHelperText)).toBeInTheDocument()
    expect(getByText(title.toString())).toBeInTheDocument()
    expect(getByText(subtitle)).toBeInTheDocument()
  })

  it('should render the Highlight component when title is a number ', () => {
    const numberTitle = 42

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Highlight title={numberTitle} subtitle={subtitle} />
      </ThemeProvider>
    )

    expect(getByText(numberTitle.toString())).toBeInTheDocument()
  })
})
