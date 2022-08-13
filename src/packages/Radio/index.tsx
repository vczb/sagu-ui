import React from 'react'
import CheckBox, { CheckBoxProps } from '../CheckBox'

export type RadioProps = CheckBoxProps

const Radio = (props: RadioProps) => <CheckBox {...props} type="radio" />

export default Radio
