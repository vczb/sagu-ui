import React, { useEffect, useState } from 'react'
import Alert, { AlertProps } from '../Alert'

import * as S from './styles'
import { createPortal } from 'react-dom'

export type ToasterProps = {
  duration?: number | null
  closable?: boolean
  animated?: 'top' | null
  isFullWidth?: boolean
} & Omit<AlertProps, 'header'> // Omit the 'header' prop from AlertProps

const Toaster = ({
  duration = 5000,
  closable = true,
  animated,
  isFullWidth = false,
  ...props
}: ToasterProps) => {
  const [isVisible, setIsVisible] = useState(true)
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

  if (!isVisible) {
    return null
  }

  if (animated) {
    return createPortal(
      <S.Toaster
        {...props}
        closable={closable}
        animated={animated}
        duration={duration}
        isFullWidth={isFullWidth}
      />,
      document.querySelector('body')!
    )
  }

  return <Alert {...props} closable={closable} /> // Explicitly set the 'header' prop to null
}

export default Toaster
