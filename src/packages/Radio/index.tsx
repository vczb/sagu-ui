import React from 'react'
import CheckBox, { CheckBoxProps } from '../CheckBox'

export type RadioProps = Omit<CheckBoxProps, 'type'>

const Radio = (props: RadioProps) => <CheckBox {...props} type="radio" />

export default Radio
