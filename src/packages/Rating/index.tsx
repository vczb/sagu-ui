import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { RatingContainer } from './style'

export type RatingProps = {
  name: string
  value: number
  onChange: (newValue: number) => void
}

const Rating = ({ name, value, onChange }: RatingProps) => {
  const [selectedValue, setSelectedValue] = useState(value)
  const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value
    onChange(newValue)
    setSelectedValue(newValue)
    console.log(value, selectedValue)
  }
  useEffect(() => {
    console.log('useEffect', selectedValue)
  },[selectedValue])
  console.log('rerender', selectedValue)

  return (
    <RatingContainer>
      <input
        type="radio"
        id="star5"
        name={name}
        value="5"
        checked={selectedValue >= 5}
        onChange={onOptionChange}
      />
      <label htmlFor="star5" title="5 stars">
        5 stars
      </label>
      <input
        type="radio"
        id="star4"
        name={name}
        value="4"
        checked={selectedValue === 4}
        onChange={onOptionChange}
      />
      <label htmlFor="star4" title="4 stars">
        4 stars
      </label>
      <input
        type="radio"
        id="star3"
        name={name}
        value="3"
        checked={selectedValue === 3}
        onChange={onOptionChange}
      />
      <label htmlFor="star3" title="3 stars">
        3 stars
      </label>
      <input
        type="radio"
        id="star2"
        name={name}
        value="2"
        checked={selectedValue === 2}
        onChange={onOptionChange}
      />
      <label htmlFor="star2" title="2 stars">
        2 stars
      </label>
      <input
        type="radio"
        id="star1"
        name={name}
        value="1"
        checked={selectedValue === 1}
        onChange={onOptionChange}
      />
      <label htmlFor="star1" title="1 star">
        1 star
      </label>
    </RatingContainer>
  )
}

export default Rating
