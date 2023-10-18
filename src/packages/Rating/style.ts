import styled from 'styled-components'

export const RatingContainer = styled.div`
  float: left;

  :not(:checked) > input {
    display: none;
  }

  :not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
  }
  :not(:checked) > label:before {
    content: '★';
  }
  > input:checked ~ label{
  color: #ffc700;
}
  :not(:checked) > label:hover,
  :not(:checked) > label:hover ~ label{
    color: #ffc700;
  }

  . > input:checked + label:hover,
  . > input:checked + label:hover ~ label{
    color: #ffdc00;
  }
}
`
