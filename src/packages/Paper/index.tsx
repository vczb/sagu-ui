import React from 'react'
import Box, { BoxProps } from '../Box'

import * as S from './styles'

export type PaperProps = {
  placement: 'bottom' | 'left' | 'right'
  active?: boolean
  children: React.ReactNode
} & BoxProps

const Paper = ({
  children,
  active,
  placement = 'bottom',
  padding = 'none',
  ...props
}: PaperProps) => {
  return (
    <S.Paper
      aria-hidden={!active}
      active={active}
      placement={placement}
      data-testid="paper"
    >
      <Box {...props} shadow border padding={padding}>
        {children}
      </Box>
    </S.Paper>
  )
}

export default Paper
