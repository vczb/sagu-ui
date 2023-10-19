import styled from 'styled-components'
import { BadgeProps } from '.'

export const Badge = styled.div<Pick<BadgeProps, 'size' | 'shape' | 'color'>>`
  ${({ theme, size, shape, color }) => `
    display: inline-block;
    border-radius: ${
      shape === 'circle' ? theme.border.rounded : theme.border.none
    };

    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};
    padding: ${
      shape === 'circle' && (size === 'xsmall' || size === 'small')
        ? theme.spacings.mini
        : `${theme.spacings.xxsmall} ${theme.spacings.xsmall}`
    };
    background-color: ${color || theme.colors.primary.medium};
    color: ${theme.colors.base.white};
  `}
`
