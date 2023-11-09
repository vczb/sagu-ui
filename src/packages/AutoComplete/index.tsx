// TODO: there are a bug on this component
import React, { useRef, useState } from 'react'
import { useOnClickOutside, useOnKeypress } from '../../hooks'
import Paper from '../Paper'
import Input from '../Input'

import Tag from '../Tag'
import * as S from './styles'

export type MockData = {
  id: number
  name: string
}

export type AutoCompleteProps = {
  label: string
  freeSolo: boolean
  fieldPlaceholder: string
  options: MockData[]
}

export const AutoComplete = ({
  label,
  freeSolo,
  fieldPlaceholder,
  options
}: AutoCompleteProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [textFieldValue, setTextFieldValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<MockData[]>([
    ...options
  ])

  const handleOptionClick = (option: string) => {
    setTextFieldValue(option)
    setSelectedOption(option)
    setShowOptions(false)
    setFilteredSuggestions(options)
  }

  const optionsFilter = (inputValue: string) => {
    return options.filter((option: MockData) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    showOptions === false ? setShowOptions(true) : null
    const currentInputValue = event.target.value
    setTextFieldValue(currentInputValue)
    const filteredOptions = optionsFilter(currentInputValue)
    filteredOptions.length === 0 && freeSolo
      ? (setShowOptions(false), setFilteredSuggestions(filteredOptions))
      : setFilteredSuggestions(filteredOptions)
    currentInputValue === '' && selectedOption !== ''
      ? setSelectedOption('')
      : null
  }

  const resetOptions = () => setFilteredSuggestions(options)

  const setTheFields = () => {
    freeSolo === false
      ? selectedOption === ''
        ? (setTextFieldValue(''), resetOptions())
        : (setTextFieldValue(selectedOption), resetOptions())
      : null

    setShowOptions(false)
  }

  useOnClickOutside(ref, () => {
    setTheFields()
  })

  useOnKeypress('Escape', () => {
    setTheFields()
  })

  const handleOnClick = () => {
    if (filteredSuggestions.length === 0) {
      setShowOptions(false)
    } else if (textFieldValue === '') {
      setShowOptions(!showOptions)
    } else if (selectedOption !== '') {
      setShowOptions(true)
    }
  }

  return (
    // TODO: Fix it
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <S.AutoComplete ref={ref} data-testid="auto-complete">
      <>
        <Input
          data-testid="auto-complete-input"
          label={label}
          value={textFieldValue}
          placeholder={fieldPlaceholder}
          onChange={onInputChange}
          onClick={handleOnClick}
          style={{ marginRight: 10 }}
        />
        {freeSolo === false && (
          <S.AutoCompleteArrow
            data-testid="arrow-toggle"
            direction={showOptions ? 'up' : 'down'}
            show={freeSolo === false ? true : false}
            onClick={() => setShowOptions(!showOptions)}
          />
        )}
      </>

      {showOptions && (
        <Paper data-testid="options" active={showOptions} placement="bottom">
          <div
            style={{
              display: 'grid',
              gridGap: '0.5rem',
              gridTemplateColumns: '1fr',
              padding: '0.5rem',
              placeItems: 'center'
            }}
          >
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((option) => (
                <Tag
                  key={option.id}
                  value={option.name}
                  onClick={() => handleOptionClick(option.name)}
                  isPointer
                  isDarkBgOnHover={true}
                  isDarkBg={option.name === selectedOption}
                />
              ))
            ) : (
              <S.NoOptionsWrapper>{'No Options'}</S.NoOptionsWrapper>
            )}
          </div>
        </Paper>
      )}
    </S.AutoComplete>
  )
}

export default AutoComplete
