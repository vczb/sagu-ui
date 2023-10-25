import styled, { css } from 'styled-components'
import { TooltipProps } from '.'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

export const Content = styled.span<Pick<TooltipProps, 'position'>>`
  ${({ theme, position }) => css`
    visibility: hidden;
    max-width: calc(${theme.container.small} / 2);
    background-color: ${theme.colors.base.black};
    color: ${theme.colors.base.white};
    text-align: center;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    position: absolute;
    z-index: ${theme.layers.menu};

    // Dynamic positioning based on the provided position prop
    ${position === 'top' &&
    css`
      bottom: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translateX(-50%);
    `}
    ${position === 'bottom' &&
    css`
      top: calc(100% + ${theme.spacings.xsmall});
      left: 50%;
      transform: translateX(-50%);
    `}
    ${position === 'left' &&
    css`
      top: 50%;
      right: calc(100% + ${theme.spacings.small});
      transform: translateY(-50%);
    `}
    ${position === 'right' &&
    css`
      top: 50%;
      left: calc(100% + ${theme.spacings.small});
      transform: translateY(-50%);
    `}

    ${Wrapper}:hover & {
      visibility: visible;
    }
  `}
`
