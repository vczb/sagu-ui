import React from 'react'
import { render, screen } from '../../utils/testUtils'

import Modal, { ModalBody, ModalFooter, ModalHeader } from '.'

describe('<Modal />', () => {
  it('Should not render the modal when open is false', () => {
    const modalElt = screen.queryByTestId('modal')
    expect(modalElt).toBeNull()
  })

  it('Should render the modal', () => {
    const { container } = render(
      <Modal open={true}>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    expect(container).toBeInTheDocument()
    const modalElt = screen.getByTestId('modal')
    expect(modalElt).toBeInTheDocument()
    const modalHeaderElt = screen.queryByTestId('modal-header')
    expect(modalHeaderElt).toBeNull()
    const modalFooterElt = screen.queryByTestId('modal-footer')
    expect(modalFooterElt).toBeNull()
  })

  it('Should render the modal with header', () => {
    const { container } = render(
      <Modal open={true}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>Content</ModalBody>
      </Modal>
    )
    expect(container).toBeInTheDocument()
    const modalElt = screen.getByTestId('modal')
    expect(modalElt).toBeInTheDocument()
    const modalHeaderElt = screen.getByTestId('modal-header')
    expect(modalHeaderElt).toBeInTheDocument()
    const modalFooterElt = screen.queryByTestId('modal-footer')
    expect(modalFooterElt).toBeNull()
  })

  it('Should render the modal with header and footer', () => {
    const { container } = render(
      <Modal open={true}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>Content</ModalBody>
        <ModalFooter>Footer</ModalFooter>
      </Modal>
    )
    expect(container).toBeInTheDocument()
    const modalElt = screen.getByTestId('modal')
    expect(modalElt).toBeInTheDocument()
    const modalHeaderElt = screen.getByTestId('modal-header')
    expect(modalHeaderElt).toBeInTheDocument()
    const modalFooterElt = screen.getByTestId('modal-footer')
    expect(modalFooterElt).toBeInTheDocument()
  })
})
