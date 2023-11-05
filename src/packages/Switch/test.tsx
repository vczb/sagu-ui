import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Switch from '.'

describe('<Switch />', () => {
  it('Should render with correct defaultChecked value and disabled value', () => {
    render(<Switch defaultChecked={false} disabled={true} />)

    const switchComponent = screen.getByRole('checkbox')
    expect(switchComponent).not.toBeChecked()
    expect(switchComponent).toBeDisabled()
  })
  it('Should render component with text', () => {
    const labelText = 'Dark mode?'
    render(<Switch defaultChecked={false} disabled={false} label={labelText} />)

    expect(screen.getByText(labelText)).toBeInTheDocument()
  })
  it('Should change status when click and disabled is false', () => {
    render(<Switch defaultChecked={false} disabled={false} />)

    const switchComponent = screen.getByRole('checkbox')
    switchComponent.click()

    expect(switchComponent).toBeChecked()
  })
  it('Should not change status when click but disabled is true', () => {
    render(<Switch defaultChecked={false} disabled={true} />)

    const switchComponent = screen.getByRole('checkbox')
    switchComponent.click()

    expect(switchComponent).not.toBeChecked()
  })

  it('Should not be checked or disabled by default if props are not passed in explicitly', () => {
    render(<Switch size="medium" />)

    const switchComponent = screen.getByRole('checkbox')
    expect(switchComponent).not.toBeChecked()

    switchComponent.click()

    expect(switchComponent).toBeChecked()
  })
})
