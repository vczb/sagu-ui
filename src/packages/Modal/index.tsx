import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import * as S from './styles'

/**
 * Header
 */
export type ModalHeaderProps = {
  children?: React.ReactNode | string
}
export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children
}: ModalHeaderProps) => {
  return <S.ModalHeader data-testid="modal-header">{children}</S.ModalHeader>
}

/**
 * Footer
 */
export type ModalFooterProps = {
  align?: 'left' | 'right'
  children: React.ReactNode
}
export const ModalFooter: React.FC<ModalFooterProps> = ({
  align = 'right',
  children
}: ModalFooterProps) => {
  return (
    <S.ModalFooter data-testid="modal-footer" align={align}>
      {children}
    </S.ModalFooter>
  )
}

/**
 * Body
 */
type ModalBodyProps = {
  children: ReactElement | string
}
export const ModalBody: React.FC<ModalBodyProps> = ({
  children
}: ModalBodyProps) => {
  return <S.ModalBody>{children}</S.ModalBody>
}

/**
 * Modal
 */
export type ModalProps = {
  open: boolean
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  onClose?: () => void
}

const Modal: React.FC<ModalProps> = ({
  open,
  size = 'medium',
  children,
  onClose
}: ModalProps) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <S.ModalWrapper size={size}>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div data-testid="modal" className="modal">
        {children}
      </div>
    </S.ModalWrapper>,
    document.querySelector('body') || document.createElement('div')
  )
}

export default Modal
