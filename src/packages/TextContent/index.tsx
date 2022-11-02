import React from 'react'
import * as S from './styles'

type HTMLProps =
  | React.HTMLAttributes<HTMLSpanElement>
  | React.HTMLAttributes<HTMLParagraphElement>

export type TextContentProps = {
  value: string
  tag?: 'p' | 'span'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
} & HTMLProps

const TextContent = ({
  value,
  tag,
  size,
  disabled = false,
  ...props
}: TextContentProps) => {
  if (tag === 'p')
    return (
      <S.Paragraph size={size} disabled={disabled} {...props}>
        {value}
      </S.Paragraph>
    )

  return (
    <S.Span size={size} disabled={disabled} {...props}>
      {value}
    </S.Span>
  )
}

export default TextContent
