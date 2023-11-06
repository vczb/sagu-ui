import React, { InputHTMLAttributes, useCallback, useRef } from 'react'

import * as S from './styles'
import Button, { ButtonProps } from '../Button'

export type FileFieldProps = {
  text?: string
  variant?: ButtonProps['variant']
} & InputHTMLAttributes<HTMLInputElement>

const FileField = ({ text = 'Upolad', variant, ...prop }: FileFieldProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = useCallback(() => {
    inputRef?.current?.click()
  }, [])

  return (
    <>
      <S.File {...prop} ref={inputRef} type="file" />
      <Button variant={variant} onClick={handleClick}>
        {text}
      </Button>
    </>
  )
}

export default FileField
