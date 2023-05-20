import React, {
  FormEvent,
  FormHTMLAttributes,
  ReactElement,
  useCallback,
  useMemo
} from 'react'
import * as S from './styles'
import Button, { ButtonProps } from '../Button'

type SubmitEvent = FormEvent<HTMLFormElement>
type SubmitFormData = {
  [key: string]: unknown
}

export type FormProps = {
  fields: ReactElement | ReactElement[]
  buttonProps: ButtonProps
  onSubmitFormData?: (data: SubmitFormData) => void
} & FormHTMLAttributes<HTMLFormElement>

const Form = ({
  buttonProps,
  onSubmit,
  fields,
  onSubmitFormData
}: FormProps) => {
  const renderFields = useCallback((elementList: FormProps['fields']) => {
    if (Array.isArray(elementList)) {
      return (
        <S.FieldGroup>{elementList.map((el) => renderFields(el))}</S.FieldGroup>
      )
    } else {
      return elementList
    }
  }, [])

  const FormFields = useMemo(() => {
    return renderFields(fields)
  }, [fields, renderFields])

  const handleSubmit = useCallback(
    (e: SubmitEvent) => {
      if (onSubmitFormData) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data: SubmitFormData = {}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        for (const [key, value] of formData.entries()) {
          data[key] = value
        }

        return onSubmitFormData(data) // NOTE: FormData needs the name attribute to all form elements
      }
      if (onSubmit) {
        return onSubmit(e)
      }
      return
    },
    [onSubmit, onSubmitFormData]
  )

  return (
    <S.Form onSubmit={handleSubmit}>
      {FormFields}
      <Button {...buttonProps} type="submit">
        {buttonProps?.children || 'Send'}
      </Button>
    </S.Form>
  )
}

export default Form
