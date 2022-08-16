import styled, { css } from 'styled-components'

export const CheckBoxLabel = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    span {
      position: relative;
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.primary.dark};
      font-size: ${theme.font.sizes.medium};
      margin-left: ${theme.spacings.xsmall};
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 1.5rem;
        height: 1.5rem;
        border: 0.1rem solid ${theme.colors.primary.medium};
        left: -${theme.spacings.small};
        transform: translateY(-50%);
      }
    }
    input {
      opacity: 0;
    }
    input:focus + span {
      &::after {
        box-shadow: ${theme.shadows.focus};
      }
    }
    input:checked + span {
      &::after {
        background: ${theme.colors.secondary.medium};
      }
    }
    input[type='radio'] + span {
      &::after {
        border-radius: 50%;
      }
    }
  `}
`
