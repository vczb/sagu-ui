import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Form, { FormProps } from '.'
import TextField from '../TextField'
import Switch from '../Switch'
import CheckBox from '../CheckBox'
import TextContent from '../TextContent'

export default {
  title: 'Form',
  component: Form,
  args: {
    onSubmit: () => console.log('ok'),
    buttonProps: {
      variant: 'filled',
      children: 'Submit form'
    },
    fields: [
      <TextField name="fullname" placeholder="Full name" key={0} />,
      [
        <TextField name="position" placeholder="Position" key={1} />,
        <Switch name="open-to-work" label="Open to work?" key={2} />
      ],
      <TextField name="email" placeholder="Email" key={3} type="email" />,
      <TextContent
        size="small"
        tag="span"
        key={4}
        value="Please set your skills"
      />,
      [
        <CheckBox name="skill-programming" title="Programming" key={5} />,
        <CheckBox name="skill-design" title="Design" key={6} />,
        <CheckBox name="skill-markething" title="Markething" key={7} />,
        <CheckBox name="skill-leadership" title="Leadership" key={8} />
      ],
      <TextField name="address" placeholder="Address" key={9} />,
      [
        <TextField
          name="street-number"
          placeholder="Stret number"
          type="number"
          key={10}
        />,
        <TextField
          name="zip-code"
          placeholder="Zip code"
          type="number"
          key={11}
        />
      ]
    ]
  }
} as Meta

export const Default: Story<FormProps> = (args) => <Form {...args} />
