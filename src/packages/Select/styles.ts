import styled, { css } from 'styled-components'
import { SelectProps } from '.'

export const SelectButton = styled.button<Pick<SelectProps, 'active'>>`
  ${({ theme, active }) => css`
    position: relative;
    cursor: pointer;
    label,
    input {
      cursor: inherit;
    }
    position: relative;
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    &::after {
      content: '';
      position: absolute;
      border: solid ${theme.colors.secondary.medium};
      opacity: 0.5;
      border-width: ${active ? '0.2rem 0 0 0.2rem' : '0 0.2rem 0.2rem 0'};
      display: inline-block;
      padding: 0.3rem;
      right: ${theme.spacings.small};
      top: ${active ? '60%' : '50%'};
      transform: rotate(45deg) translateY(-50%);
    }
  `}
`
export const Select = styled.div`
  position: relative;
  width: 100%;
`
