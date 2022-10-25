import React, { useState } from 'react';
import { IFormSchema, IFormState } from './types';

export const useForm = (
  formSchema: IFormSchema[]
): {
  formState: IFormState;
  handleChange: (event: React.ChangeEvent<any>) => void;
  setFormError: (name: string, error: string) => void;
  handleReset: () => void;
  setFormValue: (name: string, value: any) => void;
  doValidate: () => boolean;
} => {
  const getInitialState = () => {
    let formValues: IFormState = {};
    formSchema.forEach((formItem: IFormSchema) => {
      formValues[formItem.name] = {
        value: formItem?.value || '',
        error: '',
      };
    });
    return formValues;
  };

  const [formState, setFormState] = useState<IFormState>(getInitialState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<any>): void => {
    const { name, value, type } = event.target;
    if (type === 'file') return handleFileChange(event);
    if (type === 'checkbox') return handleChangeCheckbox(event);
    setFormValue(name, value);
  };

  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, checked } = event.target;
    const values = formState[name].value as string[];
    const newValues = checked
      ? [...values, value]
      : values.filter((item: string) => item !== value);

    setFormValue(name, newValues);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    files && setFormValue(name, files[0]);
  };

  const setFormValue = (name: string, value: any): void => {
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: isSubmitting ? validateField(name, value) : '',
      },
    });
  };

  const validateField = (name: string, value: any): string => {
    const formItem = formSchema.find(item => item.name === name);
    if (!formItem) return '';
    const { required, error } = formItem;
    return required && isValueEmpty(value)
      ? error || `${name} field is required`
      : '';
  };

  const setFormError = (name: string, error: string): void => {
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        error,
      },
    });
  };

  const isValueEmpty = (value: any): boolean => {
    return Array.isArray(value)
      ? value.length === 0 || value.every((item: string) => item === '')
      : !value;
  };

  const doValidate = (): boolean => {
    setIsSubmitting(true);
    let formWithErrors: IFormState = { ...formState };
    formSchema.forEach((formItem: IFormSchema) => {
      if (formItem.required && isValueEmpty(formState[formItem.name].value)) {
        formWithErrors = {
          ...formWithErrors,
          [formItem.name]: {
            ...formWithErrors[formItem.name],
            error: formItem.error || `${formItem.name} field is required`,
          },
        };
      }
    });
    setFormState(formWithErrors);
    const hasError = Object.keys(formWithErrors).length > 0;
    setIsSubmitting(hasError);
    return hasError;
  };

  const handleReset = (): void => setFormState(getInitialState());

  return {
    formState,
    doValidate,
    handleChange,
    handleReset,
    setFormError,
    setFormValue,
  };
};
