import React, { useMemo, useState } from 'react'
import { Down, Up } from '../../icons'
import * as S from './styles'

export type ImageProps = {
  url: string
  listOrder: number
}

export type SliderProps = {
  images: ImageProps[]
  size?: 'small' | 'large'
  loading?: boolean
}

const Slider = ({ images, size = 'small', loading }: SliderProps) => {
  const sortedImages = useMemo(
    () => images.slice().sort((a, b) => a.listOrder - b.listOrder),
    [images]
  )

  const [active, setActive] = useState(0)

  if (loading) return <S.Loading size={size} />

  return (
    <S.Figure size={size}>
      {sortedImages?.map(({ url, listOrder }, index) => (
        <S.Image
          active={active === index}
          position={index - active}
          loading="lazy"
          key={index}
          src={url}
          alt={`Slider image ${listOrder}`}
        />
      ))}
      {sortedImages.length > 1 && (
        <>
          <S.SlideButton
            disabled={active === 0}
            onClick={() => setActive(active - 1)}
          >
            <Up />
          </S.SlideButton>
          <S.SlideButton
            disabled={active === sortedImages.length - 1}
            onClick={() => setActive(active + 1)}
          >
            <Down />
          </S.SlideButton>
        </>
      )}
    </S.Figure>
  )
}

export default Slider
