import styled, { css } from 'styled-components'
import GenericInput from '../GenericInput'

export const TextArea = styled(GenericInput)`
  ${({ theme, label }) => css`
    padding-top: ${label ? theme.spacings.small : theme.spacings.xsmall};
  `}
`
