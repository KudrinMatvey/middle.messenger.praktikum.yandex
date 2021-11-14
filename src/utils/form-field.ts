import { Block } from '../components/shared/block';

export interface FormField<T = string> {
  validate: () => boolean;
  value: T | undefined;
  name: string;
}

export function FormFieldGuard(field: Block | FormField): field is FormField {
  if ((field as FormField).validate) {
    return typeof ((field as FormField).validate) === 'function';
  }
  return false;
}
