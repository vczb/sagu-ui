import styled, { css } from 'styled-components'

export const NumberFieldContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    border: 0.1rem solid ${theme.colors.primary.lighter};
    width: 8.5rem;
  `}
`

export const NumberField = styled.input`
  ${({ theme }) => css`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }

    text-align: center;
    outline: none;
    width: 3.5rem;
    height: 2.5rem;
    background: ${theme.colors.base.white};
    border-radius: ${theme.border.xxsmall};
    border: none;
    border-left: 0.1rem solid;
    border-right: 0.1rem solid;
    border-color: ${theme.colors.primary.lighter};
    color: ${theme.colors.primary.medium};
  `}
`

export const NumberFieldButton = styled.button<{ active?: boolean }>`
  ${({ theme, active }) => css`
    width: 2.5rem;
    cursor: ${active ? 'pointer' : 'default'};
    background: transparent;
    border: none;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.neutral.darker};
    transition: ${theme.transitions.default};
    &:hover {
      color: ${active
        ? theme.colors.primary.medium
        : theme.colors.neutral.darker};
    }
  `}
`
