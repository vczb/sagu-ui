import styled, { css } from 'styled-components'
import { TextContentProps } from '.'

export const Paragraph = styled.p<Pick<TextContentProps, 'size'>>`
  ${({ theme, size = 'small' }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors.base.black};
  `}
`
export const Span = styled.span<Pick<TextContentProps, 'size'>>`
  ${({ theme, size = 'small' }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors.base.black};
  `}
`
