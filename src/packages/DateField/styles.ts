import styled, { css } from 'styled-components'
import GenericInput from '../GenericInput'
import { DateFieldProps } from '.'

export const Date = styled(GenericInput)<Pick<DateFieldProps, 'isFullWidth'>>`
  ${({ isFullWidth }) => css`
    width: ${isFullWidth ? '100%' : 'fit-content'};
  `}
`
