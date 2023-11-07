import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Input, { InputProps } from '.'

const selectMock = {
  generic: {
    as: 'select',
    props: {
      children: [
        <option key="1">Option 1</option>,
        <option key="2">Option 2</option>
      ]
    }
  }
}

export default {
  title: 'Input',
  component: Input,
  args: {
    name: 'test'
  },
  argTypes: {
    type: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Default: StoryFn<InputProps> = (args) => <Input {...args} />

export const Date: StoryFn<InputProps> = (args) => (
  <Input {...args} type="date" />
)
export const Number: StoryFn<InputProps> = (args) => (
  <Input {...args} type="number" />
)
export const Password: StoryFn<InputProps> = (args) => (
  <Input {...args} type="password" />
)

export const Polymorphism: StoryFn<InputProps> = (args) => (
  <Input {...args} {...selectMock} />
)
