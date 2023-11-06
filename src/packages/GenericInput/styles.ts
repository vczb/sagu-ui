import styled, { css } from 'styled-components'
import { GenericInputProps } from './index'

export const GenericInput = styled.input<Pick<GenericInputProps, 'label'>>`
  ${({ theme, label }) => css`
    background: ${theme.colors.base.white};
    border-radius: ${theme.border.xxsmall};
    border: 0.2rem solid ${theme.colors.primary.lighter};
    border-radius: ${theme.border.xxsmall};
    color: ${theme.colors.primary.dark};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.regular};
    font-family: ${theme.font.family.primary};
    transition: ${theme.transitions.default};
    outline: none;
    height: 100%;
    min-height: ${theme.spacings.xlarge};
    letter-spacing: 0.1rem;
    padding: ${label ? '1.5rem 2.2rem 0 1.5rem' : '0 2.2rem 0 1.5rem'};
    &::placeholder {
      color: ${theme.colors.primary.medium};
    }
    &:hover {
      border: 0.2rem solid ${theme.colors.secondary.lighter};
    }
    &:focus {
      border: 0.2rem solid ${theme.colors.secondary.light};
    }
  `}
`
