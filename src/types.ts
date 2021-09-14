export type IType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'checkbox'
  | 'file'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'range'
  | 'tel'
  | 'url'
  | 'search'
  | 'hidden'
  | 'image'
  | 'reset'
  | 'submit'
  | 'button'

export interface IFormSchema {
  type: IType
  name: string
  id?: string
  /* value property is used to set default value for input */
  value?: any
  required?: boolean
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  label?: string
  labelClassName?: string
  text?: string
  textClassName?: string
  icon?: string
  iconClassName?: string
  options?: IFormOption[]
  accept?: string
  error?: string
  readOnly?: boolean
  disabled?: boolean
  autoFocus?: boolean
  multiple?: boolean
  pattern?: string
  autoComplete?: 'on' | 'off'
  spellCheck?: boolean
  step?: number
  formTarget?: '_self' | '_blank' | '_parent' | '_top' | 'framename'
  alt?: string
  validation?: (value: any, formValues: IFormValues, formSchema: IFormSchema[]) => string | undefined
  trim?: boolean
  /* The enum property is used to define a list of possible values or a single value for the input 
	if the value of the input is not matched with enum, the error message will be displayed
	*/
  enum?: IEnum
  /* minLength or maxLength is used to validate the length of the input value 
	either as a number or as an array of [number, string] 
	where the string is the error message 
	*/
  minLength?: number | [number, string]
  maxLength?: number | [number, string]
}

export type IEnum = Array<string | number> | string | number

export interface IFormOption {
  value: string
  /* id is used to set the id attribute of the option element and the htmlFor attribute of the label element */
  id?: string
  /* name will refer to its parent input name, if you already have a name for input, then you don't need to specify name for option, */
  name?: string
  label?: string
  text?: string
  icon?: string
  checked?: boolean
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface IFormValues {
  [key: string]: any
}

export interface IFormErrors {
  [key: string]: string
}
