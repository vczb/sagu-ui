import { RenderResult, fireEvent } from '@testing-library/react'
import React from 'react'
import { render, screen } from '../../utils/testUtils'
import AutoComplete, { AutoCompleteProps } from './index' // Import your AutoComplete component
import { mock } from './mock'

const mockData: AutoCompleteProps = {
  label: 'Search',
  freeSolo: false,
  fieldPlaceholder: 'Type here',
  options: mock
}
let textField: HTMLInputElement
let unmount: RenderResult['unmount']

const AutoCompleteComponent = (props: AutoCompleteProps) => {
  return render(<AutoComplete {...mockData} {...props} />)
}

describe('AutoComplete Component common use cases', () => {
  beforeEach(() => {
    ;({ unmount } = AutoCompleteComponent(mockData))
    textField = screen.getByTestId('auto-complete-input')
  })

  afterEach(() => unmount())

  it('should render the component with initial state', () => {
    const autoCompleteComponent = screen.getByTestId('auto-complete')
    const options = screen.queryByTestId('options')

    expect(autoCompleteComponent).toBeInTheDocument()
    expect(textField).toBeInTheDocument()
    expect(options).not.toBeInTheDocument()
  })

  it('should show options when input field is clicked', () => {
    fireEvent.click(textField)

    const options = screen.getByTestId('options')
    expect(options).toBeInTheDocument()
  })

  it('should show filtered options based on user input', () => {
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(screen.queryByTestId('options')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
    expect(screen.queryByText('Houston')).toBeInTheDocument()
    expect(screen.queryByText('New York')).not.toBeInTheDocument()
    expect(screen.queryByText('Los Angeles')).not.toBeInTheDocument()
  })

  it('should set the text field with selected option and hide the options when user clicks on option', () => {
    fireEvent.click(textField)

    fireEvent.click(screen.getByText('Los Angeles'))

    expect(textField).toHaveValue('Los Angeles')
    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
  })

  it('should hide options list when user clicks on outside', () => {
    fireEvent.click(textField)

    expect(screen.queryByTestId('options')).toBeInTheDocument()

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
  })

  //For touch screen devices
  it('should hide options list when user clicks on outside', () => {
    fireEvent.click(textField)

    expect(screen.queryByTestId('options')).toBeInTheDocument()

    fireEvent.touchStart(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
  })
})

describe('AutoComplete Component in comboBox mode', () => {
  beforeEach(() => {
    ;({ unmount } = AutoCompleteComponent(mockData))
    textField = screen.getByTestId('auto-complete-input')
  })

  afterEach(() => unmount())

  it('should show no options when user enters random value as input in comboBox mode', () => {
    fireEvent.change(textField, { target: { value: 'hdfddds' } })

    expect(screen.queryByTestId('options')).toBeInTheDocument()
    expect(screen.getByText('No Options')).toBeInTheDocument()
  })

  it('should show the options list and hide it when user clicks on arrow toggle for two times in comboBox mode (toggle)', () => {
    const arrowToggle = screen.getByTestId('arrow-toggle')

    fireEvent.click(arrowToggle)

    expect(screen.queryByTestId('options')).toBeInTheDocument()

    fireEvent.click(arrowToggle)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
  })

  it('should hide options list and reset the text field when user not selected any option and clicks outside in comboBox mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('')
  })

  //For touch screen devices
  it('should hide options list and reset the text field when user not selected any option and clicks outside in comboBox mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.touchStart(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('')
  })
})

describe('AutoComplete Component in freeSolo mode', () => {
  beforeEach(() => {
    ;({ unmount } = AutoCompleteComponent({
      ...mockData,
      freeSolo: true
    }))
    textField = screen.getByTestId('auto-complete-input')
  })

  afterEach(() => unmount())

  it('should not show any options when user enters random value as input in freeSolo mode', () => {
    fireEvent.change(textField, { target: { value: 'hdfddds' } })

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
  })

  it('should not show arrow toggle in freeSolo mode', () => {
    expect(screen.queryByTestId('arrow-toggle')).not.toBeInTheDocument()
  })

  it('should hide options list and not reset the text field when user not selected any option and clicks outside in freeSolo mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('h')
  })

  it('should hide options list when user enters random value and click outside and again click on text field in freeSolo mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.mouseDown(document.body)
    fireEvent.click(textField)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('h')
  })

  //For touch screen devices
  it('should hide options list and not reset the text field when user not selected any option and clicks outside in freeSolo mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.touchStart(document.body)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('h')
  })

  it('should hide options list when user enters random value and click outside and again click on text field in freeSolo mode', () => {
    fireEvent.click(textField)
    fireEvent.change(textField, { target: { value: 'h' } })

    expect(textField).toHaveValue('h')

    fireEvent.touchStart(document.body)
    fireEvent.click(textField)

    expect(screen.queryByTestId('options')).not.toBeInTheDocument()
    expect(textField).toHaveValue('h')
  })
})
