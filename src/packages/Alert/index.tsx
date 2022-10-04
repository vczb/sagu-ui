import React, { BaseHTMLAttributes, useCallback, useState } from 'react'
import { STATUS_ICONS } from '../../utils/statusIcons'
import Button from '../Button'
import * as S from './styles'

export type AlertProps = {
  children: React.ReactNode
  severity?: 'error' | 'warning' | 'info' | 'success'
  header?: React.ReactNode
  showIcon?: boolean
  closable?: boolean
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void
} & BaseHTMLAttributes<HTMLDivElement>

type DisplayType = 'show' | 'hide'

const Alert = ({
  children,
  severity = 'info',
  header,
  showIcon = false,
  closable = false,
  onClose,
  ...props
}: AlertProps) => {
  const [display, setDisplay] = useState<DisplayType>('show')

  const handleClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setDisplay('hide')
      onClose?.(event)
    },
    [onClose]
  )

  if (display === 'hide') {
    return null
  }

  return (
    <S.Wrapper role="alert" severity={severity} {...props}>
      <S.Container>
        {closable && (
          <S.CloseButton>
            <Button outline={false} size="xsmall" onClick={handleClose}>
              X
            </Button>
          </S.CloseButton>
        )}
        {showIcon && (
          <S.IconWrapper severity={severity} header={header}>
            {STATUS_ICONS[severity as keyof typeof STATUS_ICONS]}
          </S.IconWrapper>
        )}
        <S.Content>
          {header && <S.Header>{header}</S.Header>}
          <S.Body>{children}</S.Body>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default Alert
