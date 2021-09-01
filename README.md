# Formash

Formash is a simple React form library that uses hooks and schema to manage form state, errors, validation and so much more. Now you don't need to write a lot of code to manage your forms. You Just need to write a schema, pass it to the useForm hook and render your formSchema. and you are good to go. It is designed to be flexible and easy to use. You can use it with any UI library.

## Installation

### npm

```bash
npm i formash
```

### yarn

```bash
yarn add formash
```

## Usage

Formash provides the `useForm` hook, which takes a form `schema` as an argument and returns an object with various properties and functions to manage form state. Here's an overview of the available variables and functions:

## `formSchema`

The `formSchema` is an array of objects that define the form fields. Each object represents a form field and contains properties such as name, type, error, value, and more. You can use the formSchema to render the form fields in your React components. Here are the available properties for each schema object:

| Property        | Type                                                                                    | Description                                                                               |
| --------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| type (required) | string                                                                                  | The type of the input field (e.g., 'text', 'select', 'checkbox').                         |
| name (required) | string                                                                                  | The name of the input field.                                                              |
| id              | string                                                                                  | The ID of the input field.                                                                |
| required        | boolean                                                                                 | Indicates whether the input field is required.                                            |
| placeholder     | string                                                                                  | The placeholder text for the input field.                                                 |
| className       | string                                                                                  | The CSS class name for the input field.                                                   |
| style           | React.CSSProperties                                                                     | The inline style for the input field.                                                     |
| label           | string                                                                                  | The label text for the input field.                                                       |
| labelClassName  | string                                                                                  | The CSS class name for the label element.                                                 |
| text            | string                                                                                  | Additional text to display with the input field.                                          |
| textClassName   | string                                                                                  | The CSS class name for the additional text element.                                       |
| icon            | string                                                                                  | The name of the icon to display with the input field.                                     |
| iconClassName   | string                                                                                  | The CSS class name for the icon element.                                                  |
| options         | Array<OptionObject>                                                                     | An array of options for 'select', 'checkbox', or 'radio' type inputs.                     |
| accept          | string                                                                                  | The file types accepted by the input field.                                               |
| value           | any                                                                                     | The value of the input field.                                                             |
| error           | string                                                                                  | The error message for the input field.                                                    |
| readOnly        | boolean                                                                                 | Indicates whether the input field is read-only.                                           |
| disabled        | boolean                                                                                 | Indicates whether the input field is disabled.                                            |
| autoFocus       | boolean                                                                                 | Indicates whether the input field should be focused on render.                            |
| multiple        | boolean                                                                                 | Indicates whether multiple options can be selected.                                       |
| pattern         | string                                                                                  | The pattern for input validation.                                                         |
| autoComplete    | 'on'                                                                                    | 'off'                                                                                     | The auto-complete behavior for the input field. |
| spellCheck      | boolean                                                                                 | Indicates whether spell checking is enabled.                                              |
| step            | number                                                                                  | The step value for numeric input fields.                                                  |
| formTarget      | '\_self'                                                                                | '\_blank'                                                                                 | '\_parent' | '\_top' | 'framename' | The target frame for form submission. |
| alt             | string                                                                                  | The alternative text for the input field (used for image inputs).                         |
| validation      | (value: any, formValues: IFormValues, formSchema: IFormSchema[]) => string \| undefined | A custom validation function for the input field.                                         |
| trim            | boolean                                                                                 | Indicates whether leading and trailing whitespace should be removed from the input value. |

## useForm()

`useForm` : It's a hook that takes `formSchema` as an argument and returns an object with the following properties: |

| Values         | Description                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
|                |
| `formValues`   | An object that contains the values of the input fields.                                      |
|                | The key is the name of the input field and the value is the value of the input field.        |
|                |                                                                                              |
| `formErrors`   | An object that contains the errors of the input fields.                                      |
|                | The key is the name of the input field and the value is the error of the input field.        |
|                |                                                                                              |
| `handleChange` | A function that takes an event as an argument and updates the value of the input field.      |
|                |                                                                                              |
| `doValidate`   | A function that takes no arguments and validates the input fields.                           |
|                | It returns a boolean value that indicates if the form is valid or not.                       |
|                | Call this function before submitting the form.                                               |
|                |                                                                                              |
| `handleReset`  | A function that takes no arguments and resets the form values and errors.                    |
|                |                                                                                              |
| `setFormValue` | If you want to set the form value from the outside, you can use the `setFormValue` function. |
|                | It takes two arguments. The first argument is the name of the input field,                   |
|                | and the second argument is the value that you want to set.                                   |
|                |                                                                                              |
| `setFormError` | If you want to set the form error from the outside, you can use the `setFormError` function. |
|                | It takes two arguments. The first argument is the name of the input field,                   |
|                | and the second argument is the error message that you want to set.                           |
|                |                                                                                              |
| `setFormData`  | Let's say you have a form for updating a user information.                                   |
|                | If you want to show the previous information in the form,                                    |
|                | you can use the `setFormData` function to set the form values.                               |
|                | It takes an object as an argument. The key is the name of the input field,                   |
|                | and the value is the value that you want to set.                                             |

<br>

## Basic Usage

```javascript
import { useForm } from 'formash'

const formSchema = [
  {
    type: 'text',
    name: 'name',
    value: '',
    label: 'Name',
    placeholder: 'Enter your name',
    error: 'Please enter your name',
    required: true,
  },
  // Add more fields as needed
]

const Form = () => {
  const { formValues, formErrors, handleChange, doValidate } = useForm(formSchema)
  const handleSubmit = e => {
    e.preventDefault()
    const isValid = doValidate()
    if (isValid) {
      // Handle form submission logic here
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {formSchema.map(item => {
        return (
          <div key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              value={formValues[item.name]}
              onChange={handleChange}
              placeholder={item.placeholder}
            />
            <div> {formErrors[item.name]} </div>
          </div>
        )
      })}
      <button> Submit </button>
    </form>
  )
}
```

# Additional Input Types

## How to use with `select input`

```javascript
import { useForm } from 'formash'

const formSchema = [
  {
    value: '',
    name: 'menu',
    label: 'Menu',
    type: 'select',
    required: true,
    error: 'Please select your favorite menu',
    placeholder: 'What is your favorite menu?',
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
]

const Select = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            <select name={item.name} onChange={handleChange} value={formValues[item.name]}>
              <option selected>{item.label}</option>
              {item.options?.map(option => {
                return (
                  <option key={option.name} value={option.value}>
                    {option.label}
                  </option>
                )
              })}
            </select>
            <div> {formErrors[item.name]} </div>
          </div>
        )
      })}
    </div>
  )
}
```

## How to use with input `checkbox` type

Note: to checked the checkbox, you need to check the option value in formValues[item.name] array

```javascript
import { useForm } from 'formash'

const formSchema = [
  {
    value: [],
    name: 'hobbies',
    required: false,
    label: 'Hobbies',
    type: 'checkbox',
    error: 'Please select your hobbies',
    placeholder: 'What is your hobbies?',
    options: [
      {
        id: 'football',
        label: 'Football',
        value: 'football',
      },
      {
        id: 'cricket',
        label: 'Cricket',
        value: 'cricket',
      },
    ],
  },
]

const CheckBox = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            {item.options?.map(option => {
              return (
                <div key={option.name}>
                  <input
                    id={option.id}
                    type={item.type}
                    name={item.name}
                    value={option.value}
                    onChange={handleChange}
                    checked={formValues[item.name].includes(option.value)}
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
              )
            })}
            <div> {formErrors[item.name]} </div>
          </div>
        )
      })}
    </div>
  )
}
```

## How to use with input `radio` type

Note: to checked the radio, you need to compare the option value with formValues[item.name] if they are equal then it will be checked

```javascript
import { useForm } from 'formash'

const formSchema = [
  {
    value: '',
    type: 'radio',
    name: 'gender',
    label: 'Gender',
    required: false,
    error: 'Please select your gender',
    placeholder: 'What is your gender?',
    options: [
      {
        id: 'male',
        label: 'Male',
        value: 'male',
      },
      {
        id: 'female',
        label: 'Female',
        value: 'female',
      },
    ],
  },
]

const Radio = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

  return (
    <div>
      {formSchema.map(item => {
        return (
          <div>
            {item.options?.map(option => {
              return (
                <div key={option.name}>
                  <input
                    id={option.id}
                    type={item.type}
                    name={item.name}
                    value={option.value}
                    onChange={handleChange}
                    checked={formValues[item.name] === option.value}
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
              )
            })}
            <div> {formErrors[item.name]} </div>
          </div>
        )
      })}
    </div>
  )
}
```

## How to use with input `file` type

Note: with file input type, you don't need to set the value attribute. It will be set automatically when you select the file.

```javascript
import { useForm } from 'formash';

const formSchema = [
  {
    value: '',
    type: 'file',
    name: 'avatar',
    required: true,
    label: 'Avatar',
    accept: 'image/*',
    placeholder: 'Enter your avatar',
    error: 'Please enter your avatar',
  },
];

const InputFile = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

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
          <div> {formErrors[item.name]} </div>
        );
      })}
    </div>
  );
};
```

# Using useReadFile Hook

The `useReadFile` hook is designed to read file data and provide it as a base64 encoded string. This is particularly useful when you want to display a preview of image files before uploading them.

```javascript
import { useReadFile } from 'formash'
const FileInput = () => {
  const { file, setFile } = useReadFile()
  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      {file && <img src={file} />}
    </div>
  )
}
```

# How to `validate the form`

The `doValidate` function is used to validate the form. It returns a boolean value: true if the form is valid and false otherwise. Make sure to call this function to obtain form errors.

```javascript
import { useForm } from 'formash'

const formSchema = []

const Form = () => {
  const { doValidate } = useForm(formSchema)

  const handleSubmit = () => {
    const isValid = doValidate()
    if (isValid) {
      // do something
    }
  }

  return <form onSubmit={handleSubmit}> </form>
}
```

# How to set the form value from outside

The `setFormValue` function allows you to set form values programmatically. Provide the name of the input field as the first argument and the desired value as the second argument.

```javascript
const { setFormValue } = useForm(formSchema)
setFormValue('email', 'someone@gmail.com')
```

# How to set data from the server to the form

The setFormData function is useful when you need to populate the form with data fetched from the server. It takes an object as an argument, where the keys represent input field names, and the values are the corresponding values to be set.

```javascript
const { setFormData, formValues } = useForm(formSchema)
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('api/user')
    const data = await response.json()
    // data = { name: 'John', email: 'john@gmail.com' }
    setFormData(data)
  }
  fetchData()
}, [])
```

# How to set the form error from outside

While useForm handles form validation and sets errors automatically, you may manually set form errors with the setFormError function. Provide the input field name as the first argument and the desired error message as the second argument.

```javascript
const { setFormError } = useForm(formSchema)
setFormError('email', 'Please enter a valid email')
```

# How to reset the form state

The handleReset function resets the form state, clearing both form values and errors.

```javascript
const { handleReset } = useForm(formSchema)
handleReset()
```

# let's see how to use with typescript

Formash provides TypeScript support with several helpful types:

- `IFormSchema`: Used to create and map over your form schema.
- `IFormOption`: Used with select, checkbox, and radio options.
- `IFormValues`: Represents the form values.
- `IFormErrors`: Represents the form errors.

```typescript
import { useForm, IFormSchema, IFormOption } from 'formash';

const formSchema: IFormSchema[] = [];

const Form = () => {
  const { formValues } = useForm(formSchema);

  return (
    <div>
      {formSchema.map((item: IFormSchema) => {
        return {item.options?.map((option: IFormOption) => {})}
      })}
    </div>
  );
};
```

# Best Practices

- Split your form elements into separate components and use them in your Form component.
- Create a schema for your form and pass it to the useForm hook.
- from useForm hook get the formValues and handleChange function to handle the input change.
- map over the schema and render the form elements.
- Use conditional rendering based on the type of form element within the map function.
- You are done.

```javascript
import { useForm } from 'formash'

const formSchema = []

const Form = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

  return (
    <form>
      {formSchema.map(item => {
        if (item.type === 'select')
          return (
            <Select
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )

        if (item.type === 'textarea')
          return (
            <TextArea
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )

        if (item.type === 'checkbox')
          return (
            <Checkbox
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )

        if (item.type === 'radio')
          return (
            <Radio
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )

        if (item.type === 'file')
          return (
            <InputFile
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )

        if (item.type === 'file')
          return (
            <Input
              key={item.name}
              formElement={item}
              handleChange={handleChange}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
            />
          )
      })}
    </form>
  )
}
```

## Authors

- [@safdar-azeem](https://github.com/safdar-azeem)
