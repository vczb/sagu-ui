import styled, { css } from 'styled-components'

export const Highlight = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas: 'a a' 'b c';
    column-gap: ${theme.spacings.xxsmall};
    width: fit-content;
    place-items: start;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.primary.medium};
    grid-area: b;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weights.light};
    color: ${theme.colors.primary.medium};
  `}
`

export const HelperText = styled.span`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.semiBold};
    color: ${theme.colors.secondary.medium};
    grid-area: a;
    text-transform: uppercase;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(100% + ${theme.spacings.xsmall});
      height: 0.1rem;
      width: 7rem;
      transform: translateY(-50%);
      background: ${theme.colors.secondary.medium};
    }
  `}
`
