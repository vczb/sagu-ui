import styled, { css } from 'styled-components'

export const Label = styled.label`
  position: relative;
  height: 5rem;
  display: flex;
  flex-direction: column;
`
export const Title = styled.span`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.secondary.medium};
    font-size: ${theme.font.sizes.xsmall};
    top: ${theme.spacings.xxsmall};
    left: ${theme.spacings.xsmall};
  `}
`
