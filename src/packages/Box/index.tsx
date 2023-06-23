import React from 'react'
import * as S from './styles'

export type BoxProps = {
  children?: React.ReactNode | React.ReactNode[] | string | number
  padding?: 'none' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
  border?: boolean
  shadow?: boolean
  flex?: 'column' | 'row'
  gap?: 'none' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large'
}

const Box = ({
  children,
  padding,
  border,
  shadow = true,
  flex,
  gap
}: BoxProps) => (
  <S.Wrapper
    padding={padding}
    border={border}
    shadow={shadow}
    flex={flex}
    gap={gap}
  >
    {children}
  </S.Wrapper>
)

export default Box
