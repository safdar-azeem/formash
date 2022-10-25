import { IFormSchema, IFormState, IFormOption } from 'formash';

interface IProps {
  formElement: IFormSchema;
  formState: IFormState;
  handleChange: (event: any) => void;
}

const Select = ({ formElement, formState, handleChange }: IProps) => {
  return (
    <select
      className="form-select"
      name={formElement.name}
      onChange={handleChange}
      value={formState[formElement.name].value}
    >
      <option selected>{formElement.label}</option>
      {formElement.options?.map((option: IFormOption) => {
        return (
          <option key={option.name} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
