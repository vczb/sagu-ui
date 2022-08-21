import React from 'react'
import * as S from './styles'

type HTMLProps =
  | React.HTMLAttributes<HTMLSpanElement>
  | React.HTMLAttributes<HTMLParagraphElement>

export type TextContentProps = {
  value: string
  tag?: 'p' | 'span'
  size?: 'small' | 'medium'
} & HTMLProps

const TextContent: React.ElementType = ({
  value,
  tag,
  size,
  ...props
}: TextContentProps) => {
  if (tag === 'p')
    return (
      <S.Paragraph size={size} {...props}>
        {value}
      </S.Paragraph>
    )

  return (
    <S.Span size={size} {...props}>
      {value}
    </S.Span>
  )
}

export default TextContent
