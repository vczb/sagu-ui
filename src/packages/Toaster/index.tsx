import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'

import Alert, { AlertProps } from '../Alert'

import * as S from './styles'
import ProgressBar from '../ProgressBar'

export type ToasterProps = {
  duration?: number | null
  closable?: boolean
  initialVisible?: boolean
  showProgress?: boolean
} & Omit<AlertProps, 'header'> // Omit the 'header' prop from AlertProps

const Toaster = ({
  duration,
  closable = true,
  initialVisible = true,
  showProgress = true,
  severity = 'success',
  onClose,
  ...props
}: ToasterProps) => {
  const [isVisible, setIsVisible] = useState(initialVisible)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    onClose && onClose()
  }, [onClose])

  useEffect(() => {
    if (typeof duration === 'number') {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [duration, handleClose])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const theme = useContext(ThemeContext)

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
      {showProgress && (
        <ProgressBar indeterminate={true} color={theme.colors.base[severity]} />
      )}
    </S.Toaster>
  )
}

export default Toaster
