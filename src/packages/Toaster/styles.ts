import styled, { css } from 'styled-components'

export const Toaster = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    div[role='alert'] {
      border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    }
    div[role='progressbar'] {
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    }
  `}
`
