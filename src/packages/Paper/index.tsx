import React, { BaseHTMLAttributes, useRef } from 'react'

import * as S from './styles'

export type PaperProps = {
  placement: 'bottom' | 'right'
  active?: boolean
  children: React.ReactNode
} & BaseHTMLAttributes<HTMLDivElement>

const Paper = ({
  children,
  active,
  placement = 'bottom',
  ...props
}: PaperProps) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <S.Paper
      ref={ref}
      aria-hidden={!active}
      active={active}
      placement={placement}
      {...props}
    >
      {children}
    </S.Paper>
  )
}

export default Paper
