import React, { useEffect, useState } from 'react'
import Alert, { AlertProps } from '../Alert'

export type ToasterProps = {
  duration?: number | null
  closable?: boolean
  initialVisible?: boolean
} & Omit<AlertProps, 'header'> // Omit the 'header' prop from AlertProps

const Toaster = ({
  duration,
  closable = true,
  initialVisible = true,
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

  if (!isVisible) {
    return null
  }

  return <Alert {...props} closable={closable} /> // Explicitly set the 'header' prop to null
}

export default Toaster
