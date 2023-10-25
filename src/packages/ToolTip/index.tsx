import React, { ReactNode } from 'react'
import * as S from './styles'

export type TooltipProps = {
  children: ReactNode
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top'
}) => {
  return (
    <S.Wrapper>
      {children}
      <S.Content position={position}>{content}</S.Content>
    </S.Wrapper>
  )
}

export default Tooltip
