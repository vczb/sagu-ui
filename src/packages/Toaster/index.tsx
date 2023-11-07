import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'

import Alert, { AlertProps } from '../Alert'

import * as S from './styles'
import ProgressBar from '../ProgressBar'

export type ToasterProps = {
  duration?: number | null
  closable?: boolean
  initialVisible?: boolean
} & Omit<AlertProps, 'header'> // Omit the 'header' prop from AlertProps

const Toaster = ({
  duration,
  closable = true,
  initialVisible = true,
  severity = 'success',
  onClose,
  ...props
}: ToasterProps) => {
  const [isVisible, setIsVisible] = useState(initialVisible)

  useEffect(() => {
    if (typeof duration === 'number') {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, duration)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [duration])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const theme = useContext(ThemeContext)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    onClose && onClose()
  }, [onClose])

  if (!isVisible) {
    return null
  }

  return (
    <S.Toaster>
      <Alert
        {...props}
        closable={closable}
        severity={severity}
        onClose={() => handleClose()}
      />
      <ProgressBar indeterminate={true} color={theme.colors.base[severity]} />
    </S.Toaster>
  )
}

export default Toaster
