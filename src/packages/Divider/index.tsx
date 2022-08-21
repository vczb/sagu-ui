import styled, { css } from 'styled-components'

const Divider = styled.hr`
  ${({ theme }) => css`
    height: 0.01rem;
    background: ${theme.colors.neutral.darkest};
    border: 0;
  `}
`

export default Divider
