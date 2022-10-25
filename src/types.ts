export type Type =
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
  | 'button';

export interface IFormSchema {
  type: Type;
  name: string;
  placeholder: string;
  label: string;
  required: boolean;
  options?: IFormOption[];
  accept?: string;
  value?: any;
  error: string;
}

export interface IFormOption {
  label: string;
  value: string;
  name?: string;
  checked?: boolean;
}

export interface IFormState {
  [key: string]: {
    value: any;
    error: string;
  };
}
