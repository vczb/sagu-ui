import React from 'react'
import Range from '.'

export default {
  title: 'Range',
  component: Range,
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    width: 200
  }
}

const Template = (args) => <Range {...args} />

export const Default = Template.bind({})
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  width: 200
}

export const Multiple = Template.bind({})
Multiple.args = {
  value: [25, 75],
  min: 0,
  max: 100,
  step: 1,
  width: 200
}
