import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'
import { SpacingKeys } from '../../styles/spacingModifier'

export type BoxProps = {
  children?: React.ReactNode | React.ReactNode[] | string | number
  padding?: SpacingKeys
  gap?: SpacingKeys
  border?: boolean
  shadow?: boolean
  variant?: 'default' | 'filled' | 'transparent'
  flex?: 'column' | 'row' | 'block' | 'none'
  justify?:
    | 'space-evenly'
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'end'
    | 'start'
  alignment?: 'normal' | 'baseline' | 'center' | 'end' | 'start'
  fullWidth?: boolean
} & BaseHTMLAttributes<HTMLDivElement>

const Box = ({
  children,
  padding,
  border = false,
  shadow = false,
  flex,
  gap,
  justify,
  alignment,
  fullWidth,
  variant,
  ...props
}: BoxProps) => (
  <S.Wrapper
    padding={padding}
    border={border}
    shadow={shadow}
    flex={flex}
    gap={gap}
    justify={justify}
    alignment={alignment}
    fullWidth={fullWidth}
    variant={variant}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Box
