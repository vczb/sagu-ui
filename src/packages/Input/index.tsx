import React from 'react'
import { InputHTMLAttributes } from 'react'
import Label from '../Label'
import * as S from './styles'

type Generic = {
  as: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
}

export type InputProps = {
  label?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  generic?: Generic
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, type = 'text', generic, ...props }: InputProps) => {
  return (
    <Label title={label}>
      <S.Input
        {...props}
        {...generic?.props}
        as={generic?.as}
        type={type}
        label={label}
      />
    </Label>
  )
}

export default Input
