import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xsmall};
  `}
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FieldGroup: any = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.xsmall};
    ${FieldGroup} {
      display: flex;
      flex-wrap: wrap;
    }
  `}
`

export const ItemGroup = styled.div`
  display: flex;
`
