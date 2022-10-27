import formSchema from '../data/formSchema'
import { IFormSchema, useForm } from 'formash'
import Checkbox from './Checkbox'
import InputError from './InputError'
import InputFile from './InputFile'
import Radio from './Radio'
import Select from './Select'
import TextArea from './TextArea'
import { getData } from '../data/data'
import { useEffect } from 'react'

const Form = () => {
  const { formValues, formErrors, handleChange, doValidate, setFormValue } = useForm(formSchema)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const hasError = doValidate()
    console.log('hasError', hasError)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getData()
      Object.keys(data).forEach((key: string) => {
        setFormValue(key, data[key])
      })
    }
    // fetchData()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      {formSchema.map((item: IFormSchema) => {
        if (item.type === 'select')
          return (
            <Select
              formElement={item}
              formValues={formValues}
              formErrors={formErrors}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'textarea')
          return (
            <TextArea
              formElement={item}
              formValues={formValues}
              formErrors={formErrors}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'checkbox')
          return (
            <Checkbox
              formElement={item}
              formValues={formValues}
              formErrors={formErrors}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'radio')
          return (
            <Radio
              formElement={item}
              formValues={formValues}
              formErrors={formErrors}
              handleChange={handleChange}
              key={item.name}
            />
          )

        if (item.type === 'file')
          return (
            <InputFile
              formElement={item}
              formValues={formValues}
              formErrors={formErrors}
              handleChange={handleChange}
              key={item.name}
            />
          )

        return (
          <div className="mb-3" key={item.name}>
            <label htmlFor={item.name}>{item.label}</label>
            <input
              type={item.type}
              className="form-control"
              id={item.name}
              name={item.name}
              value={formValues[item.name]}
              onChange={handleChange}
              placeholder={item.placeholder}
            />
            <InputError error={formErrors[item.name]} />
          </div>
        )
      })}
      <button type="submit" className="btn btn-primary btn-lg ">
        Submit
      </button>
    </form>
  )
}

export default Form
