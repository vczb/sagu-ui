import styled, { css } from 'styled-components'
import { Colors, SwitchProps } from '.'
import { theme } from '../../styles'

const figureModifiers = {
  dot: {
    normal: (colors?: Colors) => css`
      background: ${colors?.dot || '#fff'};
    `,
    disabled: () => css`
      background: ${theme.colors.neutral.lightest};
    `
  },
  bgUnchecked: {
    normal: (colors?: Colors) => css`
      background: ${colors && colors.bgUnchecked
        ? colors.bgUnchecked
        : theme.colors.neutral.dark};
    `,
    disabled: () => css`
      background: ${theme.colors.neutral.medium};
    `
  },
  bgChecked: {
    normal: (colors?: Colors) => css`
      background: ${colors && colors.bgChecked
        ? colors.bgChecked
        : theme.colors.base.success};
    `,
    disabled: () => css``
  },
  label: {
    normal: () => css`
      color: ${theme.colors.base.black};
    `,
    disabled: () => css`
      color: ${theme.colors.neutral.darkest};
    `
  }
}

export const Label = styled.label`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  `}
`
export const Input = styled.input<Pick<SwitchProps, 'colors' | 'disabled'>>`
  ${({ colors, disabled }) => css`
    opacity: 0;
    position: absolute;

    &:checked + ${Switch} {
      ${figureModifiers['bgChecked'][disabled ? 'disabled' : 'normal'](colors)}

      &:before {
        transform: translate(3rem, -50%);
      }
    }
  `}
`

export const Span = styled.span<Pick<SwitchProps, 'colors' | 'disabled'>>`
  ${({ disabled }) => css`
    ${figureModifiers['label'][disabled ? 'disabled' : 'normal']()};
  `}
`

export const Switch = styled.span<Pick<SwitchProps, 'colors' | 'disabled'>>`
  ${({ theme, colors, disabled }) => css`
    position: relative;
    width: 6rem;
    height: 2.8rem;
    ${figureModifiers['bgUnchecked'][disabled ? 'disabled' : 'normal'](colors)}

    border-radius: ${theme.spacings.medium};
    padding: ${theme.spacings.mini};
    transition: 300ms all;

    &:before {
      transition: 300ms all;
      content: '';
      position: absolute;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: ${theme.spacings.medium};
      top: 50%;
      left: ${theme.spacings.mini};
      ${figureModifiers['dot'][disabled ? 'disabled' : 'normal'](colors)}
      transform: translate(0, -50%);
    }
  `}
`
