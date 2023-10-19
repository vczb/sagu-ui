import styled from 'styled-components'
import { BadgeProps } from '.'

export const Badge = styled.div<Pick<BadgeProps, 'size' | 'shape' | 'color'>>`
  display: inline-block;
  border-radius: ${({ shape }) =>
    shape === 'circle' ? '50%' : shape === 'rectangle' ? '0px' : '0px'};
  font-size: ${({ size }) =>
    size === 'xsmall'
      ? '0.6em'
      : size === 'small'
      ? '0.7em'
      : size === 'medium'
      ? '0.8em'
      : '1em'};
  padding: ${({ size, shape }) =>
    shape === 'circle' && (size === 'xsmall' || size === 'small')
      ? '0.4em'
      : '0.2em 0.5em'};
  background-color: ${({ color, theme }) =>
    color || theme.colors.primary.medium};
  color: ${({ theme }) => theme.colors.base.white};
`
