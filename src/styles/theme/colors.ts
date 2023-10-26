import { ocean } from './ocean'

export const base = {
  white: '#F8F7FB',
  black: '#222222',
  disabled: '#78716C',
  error: '#f44336',
  warning: '#ffb300',
  info: '#2196f3',
  success: '#4caf50'
}

export const primary = ocean.primary

export const secondary = ocean.secondary

export const neutral = {
  lightest: '#F4F4F9',
  lighter: '#EFF0F9',
  medium: '#E6E6E6',
  dark: '#B3B3B3',
  darker: '#999999',
  darkest: '#808080',
  xdarkest: '#4D4D4D'
}

export default {
  base,
  primary,
  secondary,
  neutral,
}
