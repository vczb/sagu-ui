import styled, { css } from 'styled-components'

export const RatingContainer = styled.div`
  ${({ theme }) => css`
    float: left;

    :not(:checked) > input {
      display: none;
    }

    :not(:checked) > label {
      float: right;
      width: ${theme.font.sizes.xsmall};
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.neutral.lighter};
    }
    :not(:checked) > label:before {
      content: '★';
    }
    > input:checked ~ label {
      color: ${theme.colors.base.warning};
    }
    :not(:checked) > label:hover,
    :not(:checked) > label:hover ~ label {
      color: ${theme.colors.base.warning};
    }

    . > input:checked + label:hover,
    . > input:checked + label:hover ~ label {
      color: ${theme.colors.base.warning};
    }
  `}
`
