import styled, { css } from 'styled-components'
import { media } from '../../styles'
import { ModalFooterProps, ModalProps } from '.'

const modalVariants = {
  small: () => css`
    width: 100%;
    ${media.xs`
			width: 30rem;
    `}
  `,
  medium: () => css`
    width: 100%;
    ${media.xs`
			width: 30rem;
    `}
    ${media.sm`
			width: 50rem;
    `}
  `,
  large: () => css`
    width: 100%;
    ${media.xs`
			width: 30rem;
    `}
    ${media.sm`
			width: 50rem;
    `}
    ${media.md`
			width: 80rem;
    `}
  `
}

export const ModalWrapper = styled.div<Pick<ModalProps, 'size'>>`
  ${({ theme, size }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & .modal-backdrop {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }

    & .modal {
      background-color: ${theme.colors.base.white};
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      transform: translate(-50%, -50%);
      position: absolute;
      border: ${theme.border.mini} solid ${theme.colors.secondary.medium};
      box-sizing: border-box;
      ${size ? modalVariants[size]() : modalVariants.medium()}
    }
  `}
`

export const ModalBody = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    min-height: 10rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    margin-left: ${-theme.border.mini};
    border-bottom: 1px solid ${theme.colors.primary.lighter};
  `}
`

export const ModalFooter = styled.div<Pick<ModalFooterProps, 'align'>>`
  ${({ theme, align }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${align === 'left' ? 'flex-start' : 'flex-end'};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.primary.lighter};
    margin-left: ${-theme.border.mini};

    & * {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
