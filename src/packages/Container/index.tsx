import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.container.medium};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.container.gutter} / 2);
    padding-right: calc(${theme.container.gutter} / 2);
  `}
`
export default Container
