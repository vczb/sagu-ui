import React, { ReactNode } from 'react'
import * as S from './styles'

export type BoxProps = {
  children?: ReactNode | ReactNode[] | string | number
  padding?: 'none' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
  border?: boolean
  shadow?: boolean
}

const Box = ({ children, padding, border, shadow = true }: BoxProps) => (
  <S.Wrapper padding={padding} border={border} shadow={shadow}>
    {children}
  </S.Wrapper>
)

export default Box
