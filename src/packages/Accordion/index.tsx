import React, { BaseHTMLAttributes } from 'react'
import * as S from './styles'

export type AccordionProps = {
  children: React.ReactNode
  title: string
} & BaseHTMLAttributes<HTMLDivElement>
const Accordion = ({ children, title, ...props }: AccordionProps) => (
  <S.Wrapper {...props}>
    <S.Summary>
      <h2>{title}</h2>
    </S.Summary>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Accordion
