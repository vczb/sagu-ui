import styled, { css, DefaultTheme } from 'styled-components'
import { AvatarProps } from '.'

const variantShape = {
  circle: () => css`
    border-radius: 50%;
  `,
  square: () => css`
    border-radius: 0;
  `,
  rounded: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
  `
}

export const Wrapper = styled.div<Pick<AvatarProps, 'size' | 'variant'>>`
  ${({ theme, size = 'medium', variant = 'circle' }) => css`
    border-radius: 50%;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    width: ${theme.avatarSizes[size]};
    height: ${theme.avatarSizes[size]};
    justify-content: center;
    overflow: hidden;
    position: relative;
    display: inline-flex;
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.neutral.dark};
    ${!!variant && variantShape[variant](theme)}}
  `}
`

export const Img = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
    text-align: center;
    object-fit: cover;
  `}
`
