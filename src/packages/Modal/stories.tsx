import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
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

export const Simple: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>Modal content here</ModalBody>
  </Modal>
)

export const ModalWithHeader: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalHeader>
      <Heading>Title</Heading>
    </ModalHeader>
    <ModalBody>Modal content here</ModalBody>
  </Modal>
)

export const ModalWithFooter: StoryFn<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalBody>Modal content here</ModalBody>
    <ModalFooter>
      <Button>OK</Button>
    </ModalFooter>
  </Modal>
)

export const ModalWithHeaderFooter: StoryFn<ModalProps> = (args) => (
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
