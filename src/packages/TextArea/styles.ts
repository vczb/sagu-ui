import styled, { css } from 'styled-components'
import Input from '../Input'

export const TextArea = styled(Input)`
  ${({ theme, label }) => css`
    padding-top: ${label ? theme.spacings.small : theme.spacings.xsmall};
  `}
`
