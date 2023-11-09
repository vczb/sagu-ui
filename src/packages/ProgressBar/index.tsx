import React from 'react'
import * as S from './styles'

export type ProgessBarProps = {
  /** Value from 0 to 100 */
  value?: number
  color?: string
  showValue?: boolean
  label?: string
  /** If you use the indeterminate property, value and showValue will be ignored */
  indeterminate?: boolean
}

const ProgressBar: React.FC<ProgessBarProps> = ({
  value = 0,
  color,
  showValue = false,
  indeterminate = false,
  label
}) => {
  return (
    <S.ProgressBarWrapper
      role="progressbar"
      data-testid="progress-bar"
      indeterminate={indeterminate}
      showValue={showValue}
      color={color}
      value={value}
      label={label}
    >
      <S.ProgressBarBackground
        label={label}
        showValue={showValue}
        indeterminate={indeterminate}
        color={color}
      />
      <S.ProgressBar
        label={label}
        showValue={showValue}
        indeterminate={indeterminate}
        value={value}
        color={color}
      ></S.ProgressBar>
      {showValue && (
        <S.ProgressBarValue
          data-testid="progress-bar-value"
          indeterminate={indeterminate}
          color={color}
        >
          {value}%
        </S.ProgressBarValue>
      )}
      {label && (
        <S.ProgressBarLabel data-testid="progress-bar-label">
          {label}
        </S.ProgressBarLabel>
      )}
    </S.ProgressBarWrapper>
  )
}

export default ProgressBar
