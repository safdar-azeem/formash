import { IFormSchema, IFormOption, IFormErrors, IFormValues } from 'formash'
import InputError from './InputError'

interface IProps {
  formElement: IFormSchema
  formValues: IFormValues
  formErrors: IFormErrors
  handleChange: (event: any) => void
}

const Checkbox = ({ formElement, formValues, formErrors, handleChange }: IProps) => {
  return (
    <div>
      {formElement.options?.map((option: IFormOption) => {
        return (
          <div className="form-check" key={option.id}>
            <input
              className="form-check-input"
              type={formElement.type}
              value={option.value}
              id={option.id}
              checked={formValues[formElement.name]?.includes(option.value)}
              onChange={handleChange}
              name={formElement.name}
            />
            <label className="form-check-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        )
      })}
      <InputError error={formErrors[formElement.name]} />
    </div>
  )
}

export default Checkbox
