import styled, { css } from 'styled-components'

export const RatingContainer = styled.div`
  ${({ theme }) => css`
    float: left;

    :not(:checked) > input {
      display: none;
    }

    :not(:checked) > label {
      float: right;
      width: ${theme.width.medium};
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.rating.notselected};
    }
    :not(:checked) > label:before {
      content: '★';
    }
    > input:checked ~ label {
      color: ${theme.colors.rating.selected};
    }
    :not(:checked) > label:hover,
    :not(:checked) > label:hover ~ label {
      color: ${theme.colors.rating.selected};
    }

    . > input:checked + label:hover,
    . > input:checked + label:hover ~ label {
      color: ${theme.colors.rating.hover};
    }
  `}
`
