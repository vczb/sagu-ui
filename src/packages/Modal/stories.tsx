import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '../Button'
import Heading from '../Heading'
import Modal, { ModalBody, ModalFooter, ModalHeader, ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    open: false
  },
  argTypes: { onClose: { action: 'closed' } }
} as Meta

export const Simple: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>Modal content here</ModalBody>
  </Modal>
)

export const ModalWithHeader: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalHeader>
      <Heading>Title</Heading>
    </ModalHeader>
    <ModalBody>Modal content here</ModalBody>
  </Modal>
)

export const ModalWithFooter: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>Modal content here</ModalBody>
    <ModalFooter>
      <Button>OK</Button>
    </ModalFooter>
  </Modal>
)

export const ModalWithHeaderFooter: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalHeader>
      <Heading>Title</Heading>
    </ModalHeader>
    <ModalBody>Modal content here</ModalBody>
    <ModalFooter>
      <Button>OK</Button>
    </ModalFooter>
  </Modal>
)
