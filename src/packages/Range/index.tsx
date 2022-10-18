import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import * as S from './styles'

export type RangeProps = {
  value: number | [number, number]
  min: number
  max: number
  width?: number
  step?: number
  onChange: (a: number | [number, number]) => void
}

export type RangeLabel = {
  value: number
  isMultiple: boolean
}

const Range: React.FC<RangeProps> = ({
  value,
  min,
  max,
  step = 1,
  width = 200,
  onChange
}) => {
  const simpleRangeRef = useRef<HTMLInputElement>(null)
  const range1Ref = useRef<HTMLInputElement>(null)
  const range2Ref = useRef<HTMLInputElement>(null)
  const rangeProgressBar = useRef<HTMLDivElement>(null)
  const [rangeValue, setRangeValue] = useState<number | [number, number]>(value)
  const [hasFocus, setHasFocus] = useState<boolean>()
  const [labelValue, setLabelValue] = useState<number>(0)

  useEffect(() => {
    if (value) setRangeValue(value)
  }, [value])

  /**
   * Simple range handler
   */
  const simpleRangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    simpleRangeRef.current?.style.setProperty('--val', event.target.value)
    setRangeValue(Number(event.target.value))
    setLabelValue(Number(event.target.value))
    onChange(Number(event.target.value))
  }

  /**
   * Multiple range handler
   */
  const multipleRangeHandler = useCallback(
    (event?: ChangeEvent<HTMLInputElement>) => {
      if (event?.target) {
        if (event.target === range1Ref.current) {
          setLabelValue(Number(range1Ref.current?.value))
        } else {
          setLabelValue(Number(range2Ref.current?.value))
        }
      }
      const minValue = Math.min(
        Number(range1Ref.current?.value),
        Number(range2Ref.current?.value)
      )
      const maxValue = Math.max(
        Number(range1Ref.current?.value),
        Number(range2Ref.current?.value)
      )

      rangeProgressBar.current?.style.setProperty('--min', String(minValue))
      rangeProgressBar.current?.style.setProperty('--max', String(maxValue))

      setRangeValue([
        Number(range1Ref.current?.value),
        Number(range2Ref.current?.value)
      ])
      onChange([
        Number(range1Ref.current?.value),
        Number(range2Ref.current?.value)
      ])
    },
    [onChange]
  )

  const onBlurHandler = useCallback(() => {
    setHasFocus(false)
  }, [])

  const onFocusHandler = useCallback(() => {
    setHasFocus(true)
  }, [])

  /**
   * Init MultipleRange
   */
  useEffect(() => {
    if (Array.isArray(value)) {
      multipleRangeHandler()
    }
  }, [value, multipleRangeHandler])

  return (
    <S.RangeWrapper
      data-testid="range"
      width={width}
      min={min}
      max={max}
      value={rangeValue}
    >
      {hasFocus && (
        <S.InputLabel isMultiple={Array.isArray(rangeValue)} value={labelValue}>
          {labelValue}
        </S.InputLabel>
      )}
      {Array.isArray(rangeValue) ? (
        <>
          <input
            type="range"
            value={rangeValue[0]}
            step={step}
            min={min}
            max={max}
            ref={range1Ref}
            onChange={multipleRangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
          <input
            type="range"
            value={rangeValue[1]}
            step={step}
            min={min}
            max={max}
            ref={range2Ref}
            onChange={multipleRangeHandler}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
          <div ref={rangeProgressBar} className="range-progress"></div>
        </>
      ) : (
        <>
          <input
            onChange={simpleRangeHandler}
            type="range"
            value={rangeValue}
            step={step}
            ref={simpleRangeRef}
            min={min}
            max={max}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
        </>
      )}
    </S.RangeWrapper>
  )
}

export default Range
