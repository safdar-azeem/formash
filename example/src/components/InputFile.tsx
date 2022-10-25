import { useEffect } from 'react';
import { IFormSchema, IFormState, useReadFile } from 'ifarm';

interface IProps {
  formElement: IFormSchema;
  formState: IFormState;
  handleChange: (event: any) => void;
}

const InputFile = ({ formElement, formState, handleChange }: IProps) => {
  const { file, setFile } = useReadFile();

  useEffect(() => {
    setFile(formState[formElement.name].value);
  }, [formState[formElement.name].value]);

  return (
    <div className="mb-3">
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
      {file && (
        <img src={file} style={{ width: '100px' }} className="mt-3" alt="" />
      )}
      <div>{formState[formElement.name].error}</div>
    </div>
  );
};

export default InputFile;
