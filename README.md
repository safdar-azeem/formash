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

## Variables and Functions

- `formSchema` it's an array of objects. each object contains the name, type, error, value, etc. of the input field. you can use it to render the form fields. here are the properties that you can use with schema.

  <details>
  <summary><b>Click here to see what properties you can use with schema<b></summary>
    Note : the `type` and `name` properties are required. everything else is optional.
  <ul> 
  <li>type: string</li>
  <li>name: string</li>
  <li>id?: string</li>
  <li>required?: boolean</li>
  <li>placeholder?: string</li>
  <li>className?: string</li>
  <li>style?: React.CSSProperties</li>
  <li>label?: string</li>
  <li>labelClassName?: string</li>
  <li>text?: string</li>
  <li>textClassName?: string</li>
  <li>icon?: string</li>
  <li>iconClassName?: string</li>
  <li>options?: <ul> 
        [{
        <li> name: string </li>
        <li> value: string </li>
        <li> id?: string </li>
        <li> label?: string </li>
        <li> text?: string </li>
        <li> icon?: string </li>
        <li> checked?: boolean </li>
        <li> disabled?: boolean </li>
        <li> className?: string </li>
        <li> style?: React.CSSProperties </li>
        }]
      </ul>
  </li>
  <li>accept?: string</li>
  <li>value?: any</li>
  <li>error?: string</li>
  <li>readOnly?: boolean</li>
  <li>disabled?: boolean</li>
  <li>autoFocus?: boolean</li>
  <li>multiple?: boolean</li>
  <li>pattern?: string</li>
  <li>autoComplete?: 'on' | 'off'</li>
  <li>spellCheck?: boolean</li>
  <li>step?: number</li>
  <li>formTarget?: '_self' | '_blank' | '_parent' | '_top' | 'framename'</li>
  <li>alt?: string</li>
  <li>validation?: (value: any) => string</li>
  <li>trim?: boolean</li>
  <li>minLength?: number | [number, string]</li>
  <li>maxLength?: number | [number, string]</li>
  <li>enum?: Array<string | number> | string | number</li>
  </ul>
  </details>

- `useForm` it's a hook that takes `formSchema` as an argument and returns an object with the following properties:
  - `formValues` it's an object that contains the values of the input fields. the key is the name of the input field and the value is the value of the input field.
  - `formErrors` it's an object that contains the errors of the input fields. the key is the name of the input field and the value is the error of the input field.
  - `handleChange` it's a function that takes an event as an argument and updates the value of the input field.
  - `doValidate` it's a function that takes no arguments and validates the input fields. it returns boolean value that indicates if the form is valid or not. call this function before submitting the form.
  - `handleReset` it's a function that takes no arguments and resets the form values and errors.
  - `setFormValue` if you want to set the form value from the outside you can use the `setFormValue` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the value that you want to set.
  - `setFormError` if you want to set the form error from the outside you can use the `setFormError` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the error message that you want to set.
  - `setFormData` let's say you have a form for updating a user information. and you want show the previous information in the form. and data is coming from the server. you can use the `setFormData` function to set the form values. it takes an object as an argument. the key is the name of the input field and the value is the value that you want to set.

## Basic Usage

```javascript
import { useForm } from 'formash'

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
]

const Form = () => {
  const { formValues, formErrors, handleChange } = useForm(formSchema)

  return (
    <div>
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
    </div>
  )
}
```

# Let's see how we can use it with different types of inputs

# How to use with select input

```javascript
import { useForm } from 'formash'

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

# How to use with input checkbox type

Note: to checked the checkbox, you need to check the option value in formValues[item.name] array

```javascript
import { useForm } from 'formash'

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
                    type={item.type}
                    value={option.value}
                    id={option.id}
                    checked={formValues[item.name].includes(option.value)}
                    onChange={handleChange}
                    name={item.name}
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

# How to use with input radio type

Note: to checked the radio, you need to compare the option value with formValues[item.name] if they are equal then it will be checked

```javascript
import { useForm } from 'formash'

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
                    type={item.type}
                    value={option.value}
                    id={option.id}
                    checked={formValues[item.name] === option.value}
                    onChange={handleChange}
                    name={item.name}
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

# How to use with input file type

Note: with file input type, you don't need to set the value attribute. It will be set automatically when you select the file.

```javascript
import { useForm } from 'formash';

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

# Before moving to the next section, let's take a look at `useReadFile` hook

We are also providing a useReadFile hook that will read the file and return the data as a base64 encoded string. this is useful for displaying preview of images

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

# How to validate the form

get the `doValidate` function from the useForm hook. it's used to validate the form. it takes no arguments. just call it when you want to validate the form. it returns a boolean value. if the form is valid it returns `true` otherwise it returns `false`.

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

let's say you have a form for updating a user information. and you want show the previous information in the form. and data is coming from the server. you can use the `setFormData` function to set the form values. it takes an object as an argument. the key is the name of the input field and the value is the value that you want to set.

```javascript
const { setFormValue } = useForm(formSchema)
setFormValue('email', 'someone@gmail.com')
```

# How to set data from the server to the form

if do you have a form that you want to edit, you can use the `setFormData` function to set the data from the server to the form. it takes one argument which is the data object. the data object should have the same name as the input field name.

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

useForm hook validate and set error itself. but if you want to set the form error from the outside you can use the `setFormError` function that you get from the hook. it takes two arguments. the first argument is the name of the input field and the second argument is the error message that you want to set.

```javascript
const { setFormError } = useForm(formSchema)
setFormError('email', 'Please enter a valid email')
```

# How to reset the form state

it's a function that you can get from the `useForm` hook. it's used to reset the form. it takes no arguments. just call it when you want to reset the form.

```javascript
const { handleReset } = useForm(formSchema)
handleReset()
```

# let's see how to use with typescript

with typescript you can use different interfaces and types with input, schema, options and form. to make it more flexible and easy to use.

- `IFormSchema` type that you need to use to create your schema. and you can also use with parameter when mapping over the schema
- `IFormOption` type that you can use with select, checkbox and radio options
- `IFormValues` type that you can use with form values
- `IFormErrors` type that you can use with form errors

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

## Wrap up

- split your form elements into different components and use them in your Form component.
- create a schema for your form and pass it to useForm.
- from useForm hook get the formValues and handleChange function to handle the input change.
- map over the schema and render the form elements.
- do some conditional rendering based on the type of the form element.
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
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'textarea')
          return (
            <TextArea
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'checkbox')
          return (
            <Checkbox
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'radio')
          return (
            <Radio
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'file')
          return (
            <InputFile
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'file')
          return (
            <Input
              formElement={item}
              formValue={formValues[item.name]}
              formError={formErrors[item.name]}
              handleChange={handleChange}
              key={item.name}
            />
          )
      })}
    </form>
  )
}
```

## Authors

- [@safdar-azeem](https://github.com/safdar-azeem)
