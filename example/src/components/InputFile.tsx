import { useEffect } from 'react'
import { IFormSchema, IFormErrors, IFormValues, useReadFile } from 'formash'
import InputError from './InputError'

interface IProps {
  formElement: IFormSchema
  formValues: IFormValues
  formErrors: IFormErrors
  handleChange: (event: any) => void
}
const InputFile = ({ formElement, formValues, formErrors, handleChange }: IProps) => {
  const { file, setFile } = useReadFile()

  useEffect(() => {
    setFile(formValues[formElement.name])
  }, [formValues[formElement.name]])

  return (
    <div className="my-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {formElement.label}
      </label>
      <input
        type={formElement.type}
        className="form-control"
        id={formElement.name}
        name={formElement.name}
        accept={formElement.accept}
        onChange={handleChange}
        placeholder={formElement.placeholder}
      />
      {file && <img src={file} style={{ width: '100px' }} className="mt-3" alt="" />}
      <InputError error={formErrors[formElement.name]} />
    </div>
  )
}

export default InputFile
