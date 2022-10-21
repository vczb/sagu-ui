import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Breadcrumb from '.'
import NavLink from '../NavLink'
import TextContent from '../TextContent'
import { BreadcrumbItem } from './styles'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

const Template = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <NavLink size="small" href="#">
        Link 1
      </NavLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <NavLink size="small" href="#">
        Link 2
      </NavLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <TextContent value="Link 3" style={{ padding: '0 1.6rem' }} />
    </BreadcrumbItem>
  </Breadcrumb>
)

export const Default = Template.bind({})

export const Custom = Template.bind({})
Custom.args = {
  separator: '>'
}
