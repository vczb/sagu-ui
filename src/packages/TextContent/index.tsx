import React from 'react'
import * as S from './styles'

type HTMLProps =
  | React.HTMLAttributes<HTMLSpanElement>
  | React.HTMLAttributes<HTMLParagraphElement>

export type TextContentProps = {
  value: string
  tag?: 'p' | 'span' | 'i' | 'b' | 'mark'
  size?: 'small' | 'medium' | 'large'
  color?: 'white' | 'black' | 'primary' | 'secondary'
  disabled?: boolean
} & HTMLProps

const TextContent = ({
  value,
  tag = 'span',
  size,
  disabled = false,
  color,
  ...props
}: TextContentProps) => {
  return (
    <S.Text size={size} disabled={disabled} as={tag} color={color} {...props}>
      {value}
    </S.Text>
  )
}

export default TextContent
