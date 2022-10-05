import styled, { css } from 'styled-components'

export const Wrapper = styled.details`
  ${({ theme }) => css`
    border-radius: ${theme.border.xxsmall};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weights.regular};
    font-family: ${theme.font.family.primary};
  `}
`
export const Summary = styled.summary`
  ${({ theme }) => css`
    background: ${theme.colors.primary.medium};
    color: ${theme.colors.base.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    :hover {
      cursor: pointer;
    }
    ::marker {
      color: ${theme.colors.base.white};
    }
    h2 {
      display: inline-block;
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border: 0.2rem solid ${theme.colors.primary.lighter};
    border-top: 0;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`
