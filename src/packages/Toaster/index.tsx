import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { ThemeContext } from 'styled-components'

import Alert, { AlertProps } from '../Alert'

import ProgressBar from '../ProgressBar'

import * as S from './styles'

const ONE_SECOND = 1000

export type ToasterProps = {
  duration?: number
  closable?: boolean
  initialVisible?: boolean
} & Omit<AlertProps, 'header'>

const Toaster = ({
  duration = 5000,
  closable = true,
  initialVisible = true,
  severity = 'success',
  onClose,
  ...props
}: ToasterProps) => {
  const [isVisible, setIsVisible] = useState(initialVisible)
  const [progress, setProgress] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = useRef<any>()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startTimer = () => {
    timer.current = setInterval(() => {
      setProgress(progress + ONE_SECOND / 1000)
    }, ONE_SECOND)
  }

  const stopTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
    }
  }, [])

  const percentage = useMemo(
    () => (progress / (duration / ONE_SECOND)) * 100,
    [progress, duration]
  )

  useEffect(() => {
    startTimer()
    return () => {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [startTimer])

  useEffect(() => {
    if (percentage === 100) {
      stopTimer()
      setIsVisible(false)
    }
  }, [percentage, stopTimer])

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
        onMouseOver={() => stopTimer()}
        onMouseOut={() => startTimer()}
      />
      <ProgressBar
        value={100 - percentage}
        color={theme.colors.base[severity]}
      />
    </S.Toaster>
  )
}

export default Toaster
