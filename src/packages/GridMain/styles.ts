import styled, { css } from 'styled-components'
import { GridMainProps } from '.'

export const Wrapper = styled.main<Pick<GridMainProps, 'size' | 'minHeight'>>`
  ${({ theme, size = 'medium', minHeight }) => css`
    display: grid;
    grid-template-columns:
      1fr min(
        ${theme.container[size]},
        calc(100% - calc(${theme.container.gutter} * 2))
      )
      1fr;
    grid-column-gap: ${theme.container.gutter};
    min-height: ${minHeight};

    & > * {
      grid-column: 2;
    }
  `}
`
