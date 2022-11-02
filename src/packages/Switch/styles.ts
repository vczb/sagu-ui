import styled, { css } from 'styled-components'
import { SwitchProps } from '.'

export const Label = styled.label<Pick<SwitchProps, 'disabled'>>`
  ${({ disabled }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    width: fit-content;
  `}
`

const switchModifiers = {
  small: () => css`
    width: 2.8rem;
    height: 1.6rem;
    &:before {
      width: 1rem;
      height: 1rem;
    }
  `,
  medium: () => css`
    width: 3.5rem;
    height: 2rem;
    &:before {
      width: 1.4rem;
      height: 1.4rem;
    }
  `,
  large: () => css`
    width: 4.2rem;
    height: 2.4rem;
    &:before {
      width: 1.8rem;
      height: 1.8rem;
    }
  `
}

type InputProps = {
  spanSize?: SwitchProps['size']
} & Pick<SwitchProps, 'colors'>

export const Input = styled.input<InputProps>`
  ${({ theme, colors, spanSize = 'large' }) => css`
    opacity: 0;
    position: absolute;

    & + span {
      position: relative;
      border-radius: ${theme.spacings.medium};
      padding: ${theme.spacings.mini};
      transition: 300ms all;
      background: ${colors?.bgUnchecked || theme.colors.neutral.dark};

      ${spanSize && switchModifiers[spanSize]()}

      &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        border-radius: ${theme.spacings.medium};
        top: 50%;
        left: ${theme.spacings.mini};
        transform: translate(0, -50%);
        background: ${colors?.dot || theme.colors.base.white};
      }
    }

    &:checked + span {
      background: ${colors?.bgChecked || theme.colors.primary.medium};

      &:before {
        transform: translate(90%, -50%);
      }
    }

    &:disabled + span {
      opacity: 0.7;

      &:before {
        background: ${theme.colors.neutral.lightest};
      }
    }
  `}
`
