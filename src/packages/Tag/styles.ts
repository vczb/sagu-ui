import styled, { css, DefaultTheme } from 'styled-components'
import { TagProps } from '.'

const wrapperModifier = {
  isUppercase: () => css`
    text-transform: uppercase;
  `,
  isBold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weights.bold};
  `,
  isPointer: () => css`
    cursor: pointer;
  `,
  isSlashed: () => css`
    text-decoration: line-through;
  `
}

export const Wrapper = styled.div<
  Pick<TagProps, 'isUppercase' | 'isBold' | 'isPointer' | 'isSlashed' | 'size'>
>`
  ${({
    theme,
    isUppercase,
    isSlashed,
    isBold,
    isPointer,
    size = 'small'
  }) => css`
    padding: ${theme.spacings.mini} ${theme.spacings.xxsmall};
    background: ${theme.colors.primary.light};
    color: ${theme.colors.base.white};
    width: fit-content;
    height: fit-content;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights.regular};
    ${!!isUppercase && wrapperModifier.isUppercase()};
    ${!!isPointer && wrapperModifier.isPointer()};
    ${!!isSlashed && wrapperModifier.isSlashed()};
    ${!!isBold && wrapperModifier.isBold(theme)};
  `}
`
