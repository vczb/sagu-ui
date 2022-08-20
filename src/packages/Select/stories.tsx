import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Select, { SelectProps } from '.'
import { mock } from './mock'
import Tag from '../Tag'

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
    if (value.includes(item)) {
      const regexp = new RegExp(`\\${item}, |, ${item}|${item}`)
      setValue(value.replace(regexp, ''))
    } else {
      if (value.length) {
        setValue(`${value}, ${item}`)
      } else {
        setValue(item)
      }
    }
  }
  return (
    <Select {...args} fieldValue={value}>
      <div
        style={{
          display: 'grid',
          gridGap: '0.5rem',
          gridTemplateColumns: '1fr',
          padding: '0.5rem',
          placeItems: 'center'
        }}
      >
        {mock.map((item) => (
          <Tag
            key={item.id}
            value={item.name}
            onClick={() => handleClick(item.name)}
            isSlashed={value.includes(item.name)}
            isPointer
          />
        ))}
      </div>
    </Select>
  )
}
