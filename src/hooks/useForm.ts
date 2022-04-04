import { ChangeEventHandler, FormEvent, useState } from 'react';

import { FormValuesObject, FormErrorsObject, ValidateFunction } from '../types';

const validate = (validations: ValidateFunction[], values: FormValuesObject) => {
  const errors = validations
    .map(validation => validation(values))
    .filter(
      validationResult => typeof validationResult === 'object',
    ) as FormErrorsObject[];

  const errorsObject: FormErrorsObject = {};

  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), errorsObject),
  };
};

export const useForm = <T extends FormValuesObject>(
  initialState: T,
  validations: ValidateFunction[],
) => {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrorsObject>({});

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (onSubmit: VoidFunction) => (event: FormEvent) => {
    event.preventDefault();

    const { isValid, errors } = validate(validations, values);
    setErrors(errors);

    if (isValid) {
      onSubmit();
    }
  };

  const resetValues = (initialState: T) => {
    setValues(initialState);
  };

  return { values, errors, handleChange, handleSubmit, resetValues };
};
