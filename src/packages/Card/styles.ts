import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: ${theme.spacings.xxsmall};
    grid-gap: ${theme.spacings.xxsmall};
    max-width: 30rem;
    box-shadow: ${theme.shadows.default};
    > * {
      max-width: calc(30rem - calc(${theme.spacings.xxsmall} * 2));
    }
  `}
`
