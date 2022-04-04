export type FormValuesObject = {
  [formValue: string]: string;
};

export type FormErrorsObject = {
  [fieldName: string]: string;
};

export type ValidateFunction = (value: FormValuesObject) => boolean | FormErrorsObject;
