export const isRequired = (value: string): boolean =>
  value != null && value.trim().length > 0;
