import formSchema from '../data/formSchema';
import { useForm, IFormSchema } from 'ifarm';
import Checkbox from './Checkbox';
import InputFile from './InputFile';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';

const Form = () => {
  const { formState, handleChange, doValidate } = useForm(formSchema);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const hasError = doValidate();
  };

  return (
    <form onSubmit={handleSubmit}>
      {formSchema.map((item: IFormSchema) => {
        if (item.type === 'select')
          return (
            <Select
              formElement={item}
              formState={formState}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'textarea')
          return (
            <TextArea
              formElement={item}
              formState={formState}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'checkbox')
          return (
            <Checkbox
              formElement={item}
              formState={formState}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'radio')
          return (
            <Radio
              formElement={item}
              formState={formState}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'file')
          return (
            <InputFile
              formElement={item}
              formState={formState}
              handleChange={handleChange}
              key={item.name}
            />
          );

        return (
          <div className="mb-3" key={item.name}>
            <label htmlFor={item.name} className="form-label">
              {item.label}
            </label>
            <input
              type={item.type}
              className="form-control"
              id={item.name}
              name={item.name}
              value={formState[item.name].value}
              onChange={handleChange}
              placeholder={item.placeholder}
            />
            <div>{formState[item.name].error}</div>
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
