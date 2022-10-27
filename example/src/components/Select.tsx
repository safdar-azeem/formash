import { IFormErrors, IFormOption, IFormSchema, IFormValues } from 'formash'
import InputError from './InputError'

interface IProps {
  formElement: IFormSchema
  formValues: IFormValues
  formErrors: IFormErrors
  handleChange: (event: any) => void
}

const Select = ({ formElement, formValues, formErrors, handleChange }: IProps) => {
  return (
    <>
      <select
        className="form-select my-3"
        name={formElement.name}
        onChange={handleChange}
        value={formValues[formElement.name]}
      >
        <option value="" selected>
          {formElement.label}
        </option>
        {formElement.options?.map((option: IFormOption) => {
          return (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      <InputError error={formErrors[formElement.name]} />
    </>
  )
}

export default Select
