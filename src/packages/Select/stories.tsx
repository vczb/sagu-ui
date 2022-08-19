import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Select, { SelectProps } from '.'
import { mock } from './mock'

export default {
  title: 'Select',
  component: Select,
  args: {
    label: 'where'
  },
  argTypes: {
    fieldValue: {
      control: false
    },
    active: {
      control: false
    }
  }
} as Meta

export const Default: Story<SelectProps> = (args) => {
  const [value, setValue] = useState('')
  const handleClick = (item: string) => {
    if (value.length) {
      setValue(`${value}, ${item}`)
    } else {
      setValue(item)
    }
  }
  return (
    <Select {...args} fieldValue={value}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          width: '30rem',
          placeItems: 'center'
        }}
      >
        {mock.map((item) => (
          <button
            onClick={() => handleClick(item.name)}
            key={item.id}
            style={{
              padding: '0.8rem',
              width: '100%',
              textAlign: 'center',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </Select>
  )
}
