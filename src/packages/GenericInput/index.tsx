import React from 'react'
import { InputHTMLAttributes } from 'react'
import Label from '../Label'
import * as S from './styles'

type Generic = {
  as: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
}

export type GenericInputProps = {
  label?: string
  type: InputHTMLAttributes<HTMLInputElement>['type']
  generic?: Generic
} & InputHTMLAttributes<HTMLInputElement>

const GenericInput = ({
  label,
  type,
  generic = { as: 'input', props: {} },
  ...props
}: GenericInputProps) => {
  return (
    <Label title={label}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <S.GenericInput
        {...props}
        {...generic.props}
        as={generic.as}
        type={type}
        label={label}
      />
    </Label>
  )
}

export default GenericInput
