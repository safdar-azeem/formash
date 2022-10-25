import { IFormSchema, IFormState, IFormOption } from 'formash';
import InputError from './inputError';

interface IProps {
  formElement: IFormSchema;
  formState: IFormState;
  handleChange: (event: any) => void;
}

const Checkbox = ({ formElement, formState, handleChange }: IProps) => {
  return (
    <div>
      {formElement.options?.map((option: IFormOption) => {
        return (
          <div className="form-check" key={option.name}>
            <input
              className="form-check-input"
              type={formElement.type}
              value={option.value}
              id={option.name}
              checked={formState[formElement.name]?.value?.includes(
                option.value
              )}
              onChange={handleChange}
              name={formElement.name}
            />
            <label className="form-check-label" htmlFor={option.name}>
              {option.label}
            </label>
          </div>
        );
      })}
      <InputError error={formState[formElement.name].error} />
    </div>
  );
};

export default Checkbox;
