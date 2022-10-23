import React from 'react'
import Slider, { ImageProps } from '../Slider'
import * as S from './styles'
import Heading, { HeadingProps } from '../Heading'
import TextContent, { TextContentProps } from '../TextContent'
import Divider from '../Divider'
import Button, { ButtonProps } from '../Button'

export type CardProps = {
  images: ImageProps[]
  title: Pick<HeadingProps, 'children'>
  content: TextContentProps['value']
  cta: Pick<ButtonProps, 'children'>
  handleClick: () => void
}

const Card = ({ images, title, content, cta, handleClick }: CardProps) => {
  return (
    <S.Wrapper>
      <Slider images={images} />
      <Heading lineLeft lineColor="primary">
        {title}
      </Heading>
      <TextContent size={'medium'} value={content} />
      <Divider />
      <Button variant="filled" onClick={handleClick}>
        {cta}
      </Button>
    </S.Wrapper>
  )
}

export default Card
