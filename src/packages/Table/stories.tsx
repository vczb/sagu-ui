import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Table, { TableProps } from '.'

export default {
  title: 'Table',
  component: Table
} as Meta

const columns = [
  { title: 'Name', key: 'name' },
  { title: 'Age', key: 'age' },
  { title: 'Country', key: 'country' }
]

const data = [
  { name: 'John', age: 30, country: 'USA' },
  { name: 'Alice', age: 25, country: 'Canada' },
  { name: 'Bob', age: 35, country: 'UK' }
]

const Template: StoryFn<TableProps> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  columns,
  data
}
