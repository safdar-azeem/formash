import { IFormErrors, IFormSchema, IFormValues } from 'formash'
import InputError from './InputError'

interface IProps {
  formElement: IFormSchema
  formValues: IFormValues
  formErrors: IFormErrors
  handleChange: (event: any) => void
}

const TextArea = ({ formElement, formValues, formErrors, handleChange }: IProps) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {formElement.label}
      </label>
      <textarea
        className="form-control"
        placeholder={formElement.placeholder}
        onChange={handleChange}
        value={formValues[formElement.name]}
        name={formElement.name}
        id={formElement.name}
      ></textarea>
      <InputError error={formErrors[formElement.name]} />
    </div>
  )
}

export default TextArea
