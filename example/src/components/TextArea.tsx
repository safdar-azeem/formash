import { IFormSchema, IFormState } from 'formash';

interface IProps {
  formElement: IFormSchema;
  formState: IFormState;
  handleChange: (event: any) => void;
}

const TextArea = ({ formElement, formState, handleChange }: IProps) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {formElement.label}
      </label>
      <textarea
        className="form-control"
        placeholder={formElement.placeholder}
        onChange={handleChange}
        value={formState[formElement.name].value}
        name={formElement.name}
        id={formElement.name}
      ></textarea>
    </div>
  );
};

export default TextArea;
