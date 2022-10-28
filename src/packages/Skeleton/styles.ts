import styled, { css } from 'styled-components'
import { placeholder } from '../../animations/'
import { SkeletonProps } from '.'

const figureModifiers = {
  text: (fontSize?: string) => css`
    > * {
      font-size: ${fontSize};
    }
  `,
  circular: () => css`
    border-radius: 50%;
  `,
  rectangular: () => css``,
  rounded: () => css`
    border-radius: 10px;
  `
}

export const Skeleton = styled.div<
  Pick<SkeletonProps, 'variant' | 'width' | 'height' | 'fontSize'>
>`
  ${({ variant, width, height, fontSize }) => css`
    width: ${width ? `${width}px` : 'fit-content'};
    height: ${height ? `${height}px` : 'fit-content'};
    > * {
      visibility: hidden;
      opacity: 0;
    }
    ${figureModifiers[variant](fontSize)}
    ${placeholder}
  `}
`
