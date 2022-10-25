# ifarm

A simple react use-form hook to handle form state and validation. now you don't need to write a lot of code to handle form state and validation other stuff. you can use it with any react ui library. it's very simple and easy to use.

## Installation

### npm

```bash
npm i ifarm
```

### yarn

```bash
yarn add ifarm
```

## Variables and Functions

- `formSchema` it's an array of objects. each object contains the name, type, error, value, etc. of the input field. you can use it to render the form fields.
- `useForm` it's a hook that takes `formSchema` as an argument and returns an object that contains the form state and functions to handle the form state.
- `formState` it's an object that you can get from the `useForm` hook. it contains the input field values, errors
- `handleChange` it's a function that you can get from the `useForm` hook. and pass it to the `onChange` event of the input field. it takes the event object as an argument.
- `doValidate` get the `doValidate` function from the useForm hook. it's used to validate the form. it takes no arguments. just call it when you want to validate the form. it returns a boolean value. if the form is valid it returns `true` otherwise it returns `false`.
- `handleReset` it's a function that you can get from the `useForm` hook. it's used to reset the form. it takes no arguments. just call it when you want to reset the form.
- `setFormValue` if you want to set the form value from the outside you can use the `setFormValue` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the value that you want to set.
- `setFormError` if you want to set the form error from the outside you can use the `setFormError` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the error message that you want to set.

## Basic Usage

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
    error: 'Please enter your name',
    value: '',
    required: false,
  },
];

const Form = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <input
              type={item.type}
              id={item.name}
              name={item.name}
              value={formStateState[item.name].value}
              onChange={handleChange}
              placeholder={item.placeholder}
            />
            <div> {formState[item.name].error} </div>
          </div>
        );
      })}
    </div>
  );
};
```

## Let's see how we can use it with different types of inputs

### How to use with textarea

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Enter your bio',
    error: 'Please enter your bio',
    value: '',
    required: false,
  },
];

const TextArea = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div className="mb-3">
            <label htmlFor={item.name}> {item.label} </label>
            <textarea
              className="form-control"
              placeholder={item.placeholder}
              onChange={handleChange}
              value={formState[item.name].value}
              name={item.name}
              id={item.name}
            />
            <div> {formState[item.name].error} </div>
          </div>
        );
      })}
    </div>
  );
};
```

### How to use with input select type

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    type: 'select',
    name: 'menu',
    label: 'Menu',
    placeholder: 'What is your favorite menu?',
    error: 'Please select your favorite menu',
    value: '',
    required: true,
    options: [
      {
        label: 'Pizza',
        value: 'pizza',
      },
      {
        label: 'Burger',
        value: 'burger',
      },
    ],
  },
];

const Select = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            <select
              name={item.name}
              onChange={handleChange}
              value={formState[item.name].value}
            >
              <option selected>{item.label}</option>
              {item.options?.map(option => {
                return (
                  <option key={option.name} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <div> {formState[item.name].error} </div>
          </div>
        );
      })}
    </div>
  );
};
```

### How to use with input checkbox type

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    name: 'hobbies',
    label: 'Hobbies',
    placeholder: 'What is your hobbies?',
    type: 'checkbox',
    error: 'Please select your hobbies',
    value: [],
    required: false,
    options: [
      {
        label: 'Football',
        value: 'football',
        name: 'football',
      },
      {
        label: 'Cricket',
        value: 'cricket',
        name: 'cricket',
      },
    ],
  },
];

const CheckBox = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            {item.options?.map(option => {
              return (
                <div key={option.name}>
                  <input
                    type={item.type}
                    value={option.value}
                    id={option.name}
                    checked={formState[item.name]?.value?.includes(
                      option.value
                    )}
                    onChange={handleChange}
                    name={item.name}
                  />
                  <label htmlFor={option.name}>{option.label}</label>
                </div>
              );
            })}
            <div> {formState[item.name].error} </div>
          </div>
        );
      })}
    </div>
  );
};
```

Note: to checked the checkbox, you need to check the option value in formState[item.name].value array

### How to use with input radio type

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    name: 'gender',
    label: 'Gender',
    placeholder: 'What is your gender?',
    type: 'radio',
    error: 'Please select your gender',
    value: '',
    required: false,
    options: [
      {
        label: 'Male',
        value: 'male',
        name: 'male',
      },
      {
        label: 'Female',
        value: 'female',
        name: 'female',
      },
    ],
  },
];

const Radio = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            {item.options?.map(option => {
              return (
                <div key={option.name}>
                  <input
                    type={item.type}
                    value={option.value}
                    id={option.name}
                    checked={formState[item.name]?.value === option.value}
                    onChange={handleChange}
                    name={item.name}
                  />
                  <label htmlFor={option.name}>{option.label}</label>
                </div>
              );
            })}
            <div> {formState[item.name].error} </div>
          </div>
        );
      })}
    </div>
  );
};
```

Note: to checked the radio, you need to compare the option value with formState[item.name].value if they are equal then it will be checked

## How to use with input file type

```javascript
import { useForm } from 'ifarm';

const formSchema = [
  {
    type: 'file',
    name: 'avatar',
    label: 'Avatar',
    placeholder: 'Enter your avatar',
    error: 'Please enter your avatar',
    value: '',
    required: true,
    accept: 'image/*',
  },
];

const InputFile = () => {
  const { formState, handleChange } = useForm(formSchema);

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <input
              type={item.type}
              id={item.name}
              name={item.name}
              accept={item.accept}
              onChange={handleChange}
              placeholder={item.placeholder}
            />
          </div>
          <div> {formState[item.name].error} </div>
        );
      })}
    </div>
  );
};
```

Note: with file input type, you don't need to set the value attribute, it will be set automatically

## How to validate the form

```javascript
import { useForm } from 'ifarm';

const formSchema = [];

const Form = () => {
  const { form, doValidate } = useForm(formSchema);

  const handleSubmit = () => {
    const isValid = doValidate();
    if (isValid) {
      // do something
    }
  };

  return <form onSubmit={handleSubmit}> </form>;
};
```

get the `doValidate` function from the useForm hook. it's used to validate the form. it takes no arguments. just call it when you want to validate the form. it returns a boolean value. if the form is valid it returns `true` otherwise it returns `false`.

## How to set the form value from outside

if you want to set the form value from the outside you can use the `setFormValue` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the value that you want to set.

```javascript
const { setFormValue } = useForm(formSchema);
setFormValue('email', 'someone@gmail.com');
```

## How to set the form error from outside

useForm hook validate and set error itself. but if you want to set the form error from the outside you can use the `setFormError` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the error message that you want to set.

```javascript
const { setFormError } = useForm(formSchema);
setFormError('email', 'Please enter a valid email');
```

## How to reset the form state

it's a function that you can get from the `useForm` hook. it's used to reset the form. it takes no arguments. just call it when you want to reset the form.

```javascript
const { handleReset } = useForm(formSchema);
handleReset();
```

# let's see how to use with typescript

with typescript you can use different interfaces and types with input, schema, options and form. to make it more flexible and easy to use.

- `IFormSchema` type that you need to use to create your schema. and you can also use with parameter when mapping over the schema
- `IFormOption` type that you can use with select, checkbox and radio options
- `IFormState` type that you can use with form state that you get from the hook

```typescript
import { useForm, IFormSchema, IFormOption } from 'ifarm';

const formSchema: IFormSchema[] = [];

const Form = () => {
  const { form } = useForm(formSchema);

  return (
    <div>
      {formSchema.map((item: IFormSchema) => {
        return {item.options?.map((option: IFormOption) => {})}
      })}
    </div>
  );
};
```

## Wrap up

- split your form elements into different components and use them in your Form component.
- create a schema for your form and pass it to useForm.
- from useForm hook get the form state and handleChange function to handle the input change.
- map over the schema and render the form elements.
- do some conditional rendering based on the type of the form element.
- You are done.

```javascript
import { useForm } from 'ifarm';

const formSchema = [];

const Form = () => {
  const { form, handleChange } = useForm(formSchema);

  return (
    <form>
      {formSchema.map(item => {
        if (item.type === 'select')
          return (
            <Select
              formElement={item}
              handleChange={handleChange}
              formState={form}
              key={item.name}
            />
          );

        if (item.type === 'textarea')
          return (
            <TextArea
              formElement={item}
              formState={form}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'checkbox')
          return (
            <Checkbox
              formElement={item}
              formState={form}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'radio')
          return (
            <Radio
              formElement={item}
              formState={form}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'file')
          return (
            <InputFile
              formElement={item}
              formState={form}
              handleChange={handleChange}
              key={item.name}
            />
          );

        if (item.type === 'file')
          return (
            <Input
              formElement={item}
              formState={form}
              handleChange={handleChange}
              key={item.name}
            />
          );
      })}
    </form>
  );
};
```
