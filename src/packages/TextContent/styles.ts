import styled, { css } from 'styled-components'
import { TextContentProps } from '.'

export const Paragraph = styled.p<Pick<TextContentProps, 'size' | 'disabled'>>`
  ${({ theme, disabled = false, size = 'small' }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${disabled ? theme.colors.base.disabled : theme.colors.base.black};
  `}
`
export const Span = styled.span<Pick<TextContentProps, 'size' | 'disabled'>>`
  ${({ theme, disabled = false, size = 'small' }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${disabled ? theme.colors.base.disabled : theme.colors.base.black};
  `}
`
