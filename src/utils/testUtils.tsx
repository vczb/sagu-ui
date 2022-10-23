// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { SaguProvider, SaguGlobalStyles, theme } from '../styles'

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: RenderOptions = {}
) =>
  render(
    <SaguProvider theme={theme}>
      <SaguGlobalStyles />
      {ui}
    </SaguProvider>,
    renderOptions
  )

export * from '@testing-library/react'

export { customRender as render }
