import React from 'react'
import * as S from './styles'

export enum SkeletonVariant {
  TEXT = 'text',
  CIRCULAR = 'circular',
  RECTANGULAR = 'rectangular',
  ROUNDED = 'rounded'
}

export type SkeletonProps = {
  children: React.ReactNode
  variant: SkeletonVariant
  width?: number
  height?: number
  fontSize?: string
}

const Skeleton = ({
  children,
  variant,
  width,
  height,
  fontSize
}: SkeletonProps) => {
  return (
    <S.Skeleton
      variant={variant}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children}
    </S.Skeleton>
  )
}

export default Skeleton
