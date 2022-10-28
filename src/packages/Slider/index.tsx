import React, { useMemo, useState } from 'react'
import { Down, Up } from '../../icons'
import DotHolder from './Dot'
import * as S from './styles'

export type ImageProps = {
  url: string
  listOrder: number
}

export type SliderProps = {
  images: ImageProps[]
  size?: 'small' | 'large'
  loading?: boolean
  dots?: boolean
}

const Slider = ({
  images,
  size = 'small',
  loading,
  dots = false
}: SliderProps) => {
  const sortedImages = useMemo(
    () => images.slice().sort((a, b) => a.listOrder - b.listOrder),
    [images]
  )

  const [active, setActive] = useState(0)

  const generateDots = () => {
    const dots = []

    for (let index = 0; index < images.length; index++) {
      dots.push(
        <DotHolder
          key={index}
          onClick={() => setActive(index)}
          active={active === index}
        />
      )
    }
    return dots
  }

  if (loading) return <S.Loading size={size} dots={dots} />

  return (
    <S.Figure size={size} dots={dots}>
      {sortedImages?.map(({ url, listOrder }, index) => (
        <S.Image
          active={active === index}
          position={index - active}
          loading="lazy"
          key={index}
          src={url}
          alt={`Slider image ${listOrder}`}
          dots={dots}
        />
      ))}
      {sortedImages.length > 1 && (
        <>
          <S.SlideButton
            disabled={active === 0}
            onClick={() => setActive(active - 1)}
            dots={dots}
          >
            <Up />
          </S.SlideButton>
          <S.SlideButton
            disabled={active === sortedImages.length - 1}
            onClick={() => setActive(active + 1)}
            dots={dots}
          >
            <Down />
          </S.SlideButton>
        </>
      )}
      {(dots && images.length) > 1 ? <S.Dots>{generateDots()}</S.Dots> : null}
    </S.Figure>
  )
}

export default Slider
