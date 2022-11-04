import React, { useMemo, useState } from 'react'
import { errors } from './utils/errors'
import { IFormErrors, IFormSchema, IFormValues } from './types'

export const useForm = (
  formSchema: IFormSchema[]
): {
  formValues: IFormValues
  formErrors: IFormErrors
  doValidate: () => boolean
  handleChange: (event: React.ChangeEvent<any>) => void
  handleReset: () => void
  setFormError: (name: string, error: string) => void
  setFormValue: (name: string, value: any) => void
  setFormData: (data: IFormValues) => void
} => {
  const initialValues = useMemo((): IFormValues => {
    let initialValues: IFormValues = {}
    formSchema.forEach((formItem: IFormSchema) => {
      initialValues[formItem.name] = formItem?.value || ''
    })
    return initialValues
  }, [formSchema])

  const initialErrors = useMemo((): IFormErrors => {
    let initialErrors: IFormErrors = {}
    formSchema.forEach((formItem: IFormSchema) => {
      initialErrors[formItem.name] = ''
    })
    return initialErrors
  }, [formSchema])

  const [formValues, setFormValues] = useState<IFormValues>(initialValues)
  const [formErrors, setFormErrors] = useState<IFormValues>(initialErrors)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<any>): void => {
    const { name, value, type } = event.target
    if (type === 'file') return handleFileChange(event)
    if (type === 'checkbox') return handleChangeCheckbox(event)
    setFormValue(name, value)
  }

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, checked } = event.target
    const values = formValues[name]
    const newValues = checked ? [...values, value] : values.filter((item: string) => item !== value)
    setFormValue(name, newValues)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, multiple } = event.target
    if (multiple) {
      const filesArray = Array.from(files || [])
      files && setFormValue(name, filesArray)
    } else {
      files && setFormValue(name, files[0])
    }
  }

  const setFormValue = (name: string, value: any): void => {
    const formItem = formSchema.find((item: IFormSchema) => item.name === name)
    if (!formItem) return console.error(errors.fieldNotFound(name))

    formValues[name] = value
    setFormValues({
      ...formValues,
    })

    if (isSubmitting) {
      setFormErrors({
        ...formErrors,
        [name]: validateField(value, formItem),
      })
    }
  }

  const setFormError = (name: string, error: string): void => {
    formErrors[name] = error
    setFormErrors({
      ...formErrors,
    })
  }

  const isEmptyValue = (value: any): boolean => {
    return Array.isArray(value) ? value.length === 0 || value.every((item: string) => item === '') : !value
  }

  const checkLength = (value: string, formItem: IFormSchema): string => {
    const { maxLength, minLength, name } = formItem
    if (typeof maxLength === 'number' && value.length > maxLength) return errors.maxLength(name, maxLength)
    if (typeof minLength === 'number' && value.length < minLength) return errors.minLength(name, minLength)
    if (maxLength && Array.isArray(maxLength) && value.length > maxLength[0]) return maxLength[1]
    if (minLength && Array.isArray(minLength) && value.length < minLength[0]) return minLength[1]
    return ''
  }

  const validateField = (value: any, formItem: IFormSchema): string => {
    const { required, validation, error } = formItem
    if (required && isEmptyValue(value)) return error || errors.required(formItem.name)
    if (formItem?.enum && !isEmptyValue(formItem.enum)) return validateEnum(value, formItem)
    if (typeof value === 'string')
      return validation?.(value, formValues, formSchema) || checkLength(value, formItem) || ''
    if (validation) return validation(value, formValues, formSchema) || ''
    return ''
  }

  const validateEnum = (value: any, formItem: IFormSchema): string => {
    if (Array.isArray(formItem.enum))
      return formItem.enum.includes(value) ? '' : errors.arrayEnum(formItem.name, formItem.enum)
    if (typeof formItem.enum === 'string' || typeof formItem.enum === 'number')
      return formItem.enum === value ? '' : errors.singleEnum(formItem.name, formItem.enum)
    return ''
  }

  const trimValue = (value: any): any => {
    if (typeof value === 'string') return value.trim()
    if (Array.isArray(value)) return value.filter((item: string) => item)
    return value
  }

  const doValidate = (): boolean => {
    setIsSubmitting(true)
    let isValid = true
    const newFormErrors: IFormErrors = {}
    const newFormValues: IFormValues = {}
    formSchema.forEach((formItem: IFormSchema) => {
      const value = trimValue(formValues[formItem.name])
      const error = validateField(value, formItem)
      if (error) isValid = false
      newFormErrors[formItem.name] = error
      newFormValues[formItem.name] = value
    })
    setFormErrors(newFormErrors)
    setFormValues(newFormValues)
    setIsSubmitting(!isValid)
    return isValid
  }

  const handleReset = (): void => {
    setFormValues(initialValues)
    setFormErrors(initialErrors)
  }

  const setFormData = (data: IFormValues): void => {
    Object.keys(data).forEach((key: string) => {
      setFormValue(key, data[key])
    })
  }

  return {
    formValues,
    formErrors,
    doValidate,
    handleChange,
    handleReset,
    setFormError,
    setFormValue,
    setFormData,
  }
}
